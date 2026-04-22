import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';
import { CursoService } from '@core/services/curso.service';
import { PreinscripcionModalComponent } from '@app/components/preinscripcion-modal/preinscripcion-modal.component';
import type { CursoType } from '@/types';

const STORAGE_BASE = 'http://localhost:8000';

@Component({
    selector: 'app-cursos-single',
    imports: [CommonModule, RouterLink, BreadcrumbComponent],
    templateUrl: './cursos-single.component.html',
    styles: ``
})
export class CursosSingleComponent implements OnInit {
    curso: CursoType | null = null;
    masCursos: CursoType[] = [];
    loading = false;
    error = '';

    constructor(
        private route: ActivatedRoute,
        private cursoService: CursoService,
        private sanitizer: DomSanitizer,
        private modalService: NgbModal
    ) {}

    ngOnInit(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        if (!id) { this.error = 'Programa no encontrado.'; return; }
        this.loading = true;
        this.cursoService.getById(id).subscribe({
            next: (curso) => {
                this.curso = curso;
                this.loading = false;
                this.loadMasCursos(id);
            },
            error: () => { this.error = 'No se pudo cargar el programa.'; this.loading = false; }
        });
    }

    private loadMasCursos(excludeId: number): void {
        this.cursoService.getAll({ pageSize: 4 }).subscribe({
            next: (res) => {
                this.masCursos = res.data.filter(c => c.id_programa !== excludeId).slice(0, 3);
            }
        });
    }

    abrirInscripcion(): void {
        const modal = this.modalService.open(PreinscripcionModalComponent, { size: 'lg', centered: true });
        modal.componentInstance.programaId = this.curso!.id_programa;
        modal.componentInstance.programaNombre = this.curso!.nombre_programa;
    }

    get imagen(): string {
        const foto = this.curso?.foto;
        if (foto) return foto.startsWith('/') ? `${STORAGE_BASE}${foto}` : foto;
        return 'assets/img/all-images/service-img1.png';
    }

    getDocumento(url: string | null): string {
        if (!url) return '';
        return url.startsWith('/') ? `${STORAGE_BASE}${url}` : url;
    }

    getImagen(c: CursoType): string {
        const foto = c.foto;
        if (foto) return foto.startsWith('/') ? `${STORAGE_BASE}${foto}` : foto;
        return 'assets/img/all-images/service-img1.png';
    }

    get videoUrl(): SafeResourceUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.curso?.url_video ?? '');
    }
}
