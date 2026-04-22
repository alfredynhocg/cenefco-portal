import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CertPlantillaService } from '@core/services/cert-plantilla.service';

@Component({
    selector: 'app-admin-plantillas',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './plantillas.component.html',
})
export class AdminPlantillasComponent implements OnInit {
    plantillas: any[] = [];
    total = 0;
    loading = false;
    error = '';
    success = '';

    showForm = false;
    editando: any = null;

    form = {
        nombre: '',
        tipo: 'aprobacion',
        imagen_url: '',
        ancho_px: 3508,
        alto_px: 2480,
        orientacion: 'horizontal',
        formato_salida: 'jpg',
        calidad_jpg: 95,
        fuente_default: '',
        color_default: '#000000',
        estado: 'activo',
    };

    subiendo = false;
    guardando = false;

    constructor(private service: CertPlantillaService) {}

    ngOnInit(): void { this.cargar(); }

    cargar(): void {
        this.loading = true;
        this.service.index({ pageSize: 50 }).subscribe({
            next: (res) => { this.plantillas = res.data; this.total = res.total; this.loading = false; },
            error: () => { this.error = 'Error al cargar plantillas.'; this.loading = false; },
        });
    }

    nuevaPlantilla(): void {
        this.editando = null;
        this.form = { nombre: '', tipo: 'aprobacion', imagen_url: '', ancho_px: 3508, alto_px: 2480,
            orientacion: 'horizontal', formato_salida: 'jpg', calidad_jpg: 95, fuente_default: '', color_default: '#000000', estado: 'activo' };
        this.showForm = true;
        this.success = '';
        this.error = '';
    }

    editarPlantilla(p: any): void {
        this.editando = p;
        this.form = { ...p };
        this.showForm = true;
        this.success = '';
        this.error = '';
    }

    cancelar(): void {
        this.showForm = false;
        this.editando = null;
    }

    subirImagen(event: Event): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        this.subiendo = true;
        this.service.uploadImage(file).subscribe({
            next: (res) => { this.form.imagen_url = res.url; this.subiendo = false; },
            error: () => { this.error = 'Error al subir imagen.'; this.subiendo = false; },
        });
    }

    guardar(): void {
        if (!this.form.imagen_url) { this.error = 'Debe subir una imagen de plantilla.'; return; }
        this.guardando = true;
        this.error = '';
        const obs = this.editando
            ? this.service.update(this.editando.id, this.form)
            : this.service.store(this.form);

        obs.subscribe({
            next: () => {
                this.guardando = false;
                this.success = this.editando ? 'Plantilla actualizada.' : 'Plantilla creada.';
                this.showForm = false;
                this.cargar();
            },
            error: (err) => {
                this.guardando = false;
                this.error = err?.error?.message || 'Error al guardar plantilla.';
            },
        });
    }

    eliminar(p: any): void {
        if (!confirm(`¿Eliminar plantilla "${p.nombre}"?`)) return;
        this.service.destroy(p.id).subscribe({
            next: () => this.cargar(),
            error: () => alert('No se pudo eliminar la plantilla.'),
        });
    }

    get storageBase() { return 'http://localhost:8000'; }
}
