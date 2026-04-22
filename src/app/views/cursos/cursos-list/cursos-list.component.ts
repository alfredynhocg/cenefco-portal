import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BreadcrumbComponent } from '@app/components/breadcrumb/breadcrumb.component';
import { CursoService } from '@core/services/curso.service';
import type { CursoType } from '@/types';

const STORAGE_BASE = 'http://localhost:8000';

@Component({
    selector: 'app-cursos-list',
    imports: [CommonModule, FormsModule, RouterLink, BreadcrumbComponent],
    templateUrl: './cursos-list.component.html',
    styles: ``
})
export class CursosListComponent implements OnInit {
    cursos: CursoType[] = [];
    total = 0;
    pageIndex = 1;
    pageSize = 9;
    query = '';
    loading = false;
    error = '';

    constructor(private cursoService: CursoService) {}

    ngOnInit(): void {
        this.load();
    }

    load(): void {
        this.loading = true;
        this.error = '';
        this.cursoService.getAll({ pageIndex: this.pageIndex, pageSize: this.pageSize, query: this.query })
            .subscribe({
                next: (res) => {
                    this.cursos = res.data;
                    this.total = res.total;
                    this.loading = false;
                },
                error: () => {
                    this.error = 'No se pudieron cargar los programas. Intente nuevamente.';
                    this.loading = false;
                }
            });
    }

    buscar(): void {
        this.pageIndex = 1;
        this.load();
    }

    getImagen(curso: CursoType): string {
        const foto = curso.foto;
        if (foto) return foto.startsWith('/') ? `${STORAGE_BASE}${foto}` : foto;
        return 'assets/img/all-images/service-img1.png';
    }

    get totalPages(): number {
        return Math.ceil(this.total / this.pageSize);
    }

    prevPage(): void {
        if (this.pageIndex > 1) { this.pageIndex--; this.load(); }
    }

    nextPage(): void {
        if (this.pageIndex < this.totalPages) { this.pageIndex++; this.load(); }
    }
}
