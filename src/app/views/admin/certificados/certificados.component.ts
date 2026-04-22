import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CertificadoAdminService } from '@core/services/certificado-admin.service';
import { CertPlantillaService } from '@core/services/cert-plantilla.service';

@Component({
    selector: 'app-admin-certificados',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './certificados.component.html',
})
export class AdminCertificadosComponent implements OnInit {
    certificados: any[] = [];
    total = 0;
    loading = false;
    error = '';
    success = '';

    filtros = { imparte_id: '' as any, pageSize: 50, pageIndex: 1 };

    plantillas: any[] = [];
    generarImparteId: number | null = null;
    generarPlantillaId: number | null = null;
    generando = false;
    resultadoLote: any = null;

    storageBase = 'http://localhost:8000';

    constructor(
        private service: CertificadoAdminService,
        private plantillaService: CertPlantillaService
    ) {}

    ngOnInit(): void {
        this.cargar();
        this.cargarPlantillas();
    }

    cargar(): void {
        this.loading = true;
        const params: any = { pageSize: this.filtros.pageSize, pageIndex: this.filtros.pageIndex };
        if (this.filtros.imparte_id) params.imparte_id = this.filtros.imparte_id;

        this.service.index(params).subscribe({
            next: (res) => { this.certificados = res.data; this.total = res.total; this.loading = false; },
            error: () => { this.error = 'Error al cargar certificados.'; this.loading = false; },
        });
    }

    buscar(): void { this.filtros.pageIndex = 1; this.cargar(); }

    cargarPlantillas(): void {
        this.plantillaService.index({ soloActivos: true, pageSize: 100 }).subscribe({
            next: (res) => this.plantillas = res.data,
        });
    }

    generarLote(): void {
        if (!this.generarImparteId || !this.generarPlantillaId) {
            this.error = 'Ingrese ID de apertura y seleccione una plantilla.';
            return;
        }
        this.generando = true;
        this.error = '';
        this.success = '';
        this.resultadoLote = null;

        this.service.generarLote(this.generarImparteId, this.generarPlantillaId).subscribe({
            next: (res) => {
                this.generando = false;
                this.resultadoLote = res;
                this.success = `Se generaron ${res.generados} certificados.`;
                this.cargar();
            },
            error: (err) => {
                this.generando = false;
                this.error = err?.error?.message || 'Error al generar certificados.';
            },
        });
    }

    eliminar(cert: any): void {
        if (!confirm(`¿Eliminar certificado ${cert.codigo_verificacion}?`)) return;
        this.service.destroy(cert.id).subscribe({
            next: () => this.cargar(),
            error: () => alert('No se pudo eliminar.'),
        });
    }
}
