import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CertPlantillaService } from '@core/services/cert-plantilla.service';

@Component({
    selector: 'app-admin-plantilla-campos',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './plantilla-campos.component.html',
})
export class AdminPlantillaCamposComponent implements OnInit {
    plantillaId!: number;
    plantilla: any = null;
    campos: any[] = [];
    loading = false;
    error = '';
    success = '';

    showForm = false;
    editando: any = null;

    campoVacio = {
        clave: '',
        etiqueta: '',
        tipo: 'texto',
        pos_x_pct: 50,
        pos_y_pct: 50,
        ancho_pct: null as number | null,
        tamano_pt: 48,
        color: '#000000',
        alineacion: 'center',
        negrita: false,
        cursiva: false,
        mayusculas: 'upper',
        valor_fijo: '',
        activo: true,
        orden: 0,
    };

    form: any = { ...this.campoVacio };
    guardando = false;

    clavesSugeridas = [
        { value: 'nombre_completo', label: 'Nombre completo del estudiante' },
        { value: 'programa', label: 'Nombre del programa/curso' },
        { value: 'condicion', label: 'Condición (APROBADO / PARTICIPÓ)' },
        { value: 'nota', label: 'Nota final' },
        { value: 'fecha_inicio', label: 'Fecha de inicio' },
        { value: 'fecha_fin', label: 'Fecha de fin' },
        { value: 'codigo', label: 'Código de verificación' },
        { value: 'ci', label: 'Carnet de identidad' },
        { value: 'qr', label: 'Código QR (imagen)' },
    ];

    constructor(private route: ActivatedRoute, private service: CertPlantillaService) {}

    ngOnInit(): void {
        this.plantillaId = Number(this.route.snapshot.paramMap.get('id'));
        this.cargar();
    }

    cargar(): void {
        this.loading = true;
        this.service.show(this.plantillaId).subscribe({
            next: (res) => {
                this.plantilla = res;
                this.campos = res.campos || [];
                this.loading = false;
            },
            error: () => { this.error = 'Error al cargar plantilla.'; this.loading = false; },
        });
    }

    nuevoCampo(): void {
        this.editando = null;
        this.form = { ...this.campoVacio, plantilla_id: this.plantillaId };
        this.showForm = true;
        this.error = '';
        this.success = '';
    }

    editarCampo(c: any): void {
        this.editando = c;
        this.form = { ...c };
        this.showForm = true;
        this.error = '';
        this.success = '';
    }

    onClaveChange(): void {
        if (this.form.clave === 'qr') {
            this.form.tipo = 'imagen';
        }
    }

    cancelar(): void {
        this.showForm = false;
        this.editando = null;
    }

    guardar(): void {
        this.guardando = true;
        this.error = '';
        const payload = { ...this.form, plantilla_id: this.plantillaId };

        const obs = this.editando
            ? this.service.updateCampo(this.editando.id, payload)
            : this.service.storeCampo(payload);

        obs.subscribe({
            next: () => {
                this.guardando = false;
                this.success = 'Campo guardado correctamente.';
                this.showForm = false;
                this.cargar();
            },
            error: (err) => {
                this.guardando = false;
                this.error = err?.error?.message || JSON.stringify(err?.error?.errors) || 'Error al guardar.';
            },
        });
    }

    eliminar(c: any): void {
        if (!confirm(`¿Eliminar campo "${c.etiqueta}"?`)) return;
        this.service.destroyCampo(c.id).subscribe({
            next: () => this.cargar(),
            error: () => alert('No se pudo eliminar el campo.'),
        });
    }
}
