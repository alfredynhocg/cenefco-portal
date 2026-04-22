import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaAprobadosService } from '@core/services/lista-aprobados.service';

@Component({
    selector: 'app-admin-lista-aprobados',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './lista-aprobados.component.html',
})
export class AdminListaAprobadosComponent implements OnInit {
    items: any[] = [];
    total = 0;
    loading = false;
    error = '';
    success = '';

    filtros = { imparte_id: '' as any, pageSize: 50, pageIndex: 1 };

    showForm = false;
    guardando = false;

    form = {
        imparte_id: null as number | null,
        usuario_id: null as number | null,
        nota_final: null as number | null,
        condicion: 'aprobado',
        observacion: '',
    };

    constructor(private service: ListaAprobadosService) {}

    ngOnInit(): void { this.cargar(); }

    cargar(): void {
        this.loading = true;
        const params: any = { pageSize: this.filtros.pageSize, pageIndex: this.filtros.pageIndex };
        if (this.filtros.imparte_id) params.imparte_id = this.filtros.imparte_id;

        this.service.index(params).subscribe({
            next: (res) => { this.items = res.data; this.total = res.total; this.loading = false; },
            error: () => { this.error = 'Error al cargar datos.'; this.loading = false; },
        });
    }

    buscar(): void { this.filtros.pageIndex = 1; this.cargar(); }

    nuevoAprobado(): void {
        this.form = { imparte_id: null, usuario_id: null, nota_final: null, condicion: 'aprobado', observacion: '' };
        this.showForm = true;
        this.error = '';
        this.success = '';
    }

    cancelar(): void { this.showForm = false; }

    guardar(): void {
        this.guardando = true;
        this.error = '';
        this.service.store(this.form).subscribe({
            next: () => {
                this.guardando = false;
                this.success = 'Aprobado registrado correctamente.';
                this.showForm = false;
                this.cargar();
            },
            error: (err) => {
                this.guardando = false;
                this.error = err?.error?.message || JSON.stringify(err?.error?.errors) || 'Error al guardar.';
            },
        });
    }

    eliminar(item: any): void {
        if (!confirm('¿Eliminar este registro de aprobado?')) return;
        this.service.destroy(item.id).subscribe({
            next: () => this.cargar(),
            error: () => alert('No se pudo eliminar.'),
        });
    }
}
