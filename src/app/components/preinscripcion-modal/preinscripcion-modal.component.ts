import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PreinscripcionService } from '@core/services/preinscripcion.service';

@Component({
    selector: 'app-preinscripcion-modal',
    imports: [CommonModule, FormsModule],
    templateUrl: './preinscripcion-modal.component.html',
    styles: ``
})
export class PreinscripcionModalComponent {
    @Input() programaId!: number;
    @Input() programaNombre!: string;

    paso = 1;

    form = {
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        fecha_nacimiento: '',
        email: '',
        ci: '',
        expedido_id: null as number | null,
        telefono: '',
        ciudad: '',
        provincia: '',
        medio_pago: '',
        monto_pagado: null as number | null,
        sugerencia_curso: '',
        recomendar_docente: false,
        detalle_docente: '',
    };

    archivos = {
        ci_anverso: null as string | null,
        titulo: null as string | null,
        cv: null as string | null,
        foto_3x3: null as string | null,
    };

    subiendo: { [k: string]: boolean } = {};
    enviando = false;
    exito = false;
    error = '';

    expedidos = [
        { id: 1, nombre: 'Beni' },
        { id: 2, nombre: 'Chuquisaca' },
        { id: 3, nombre: 'Cochabamba' },
        { id: 4, nombre: 'La Paz' },
        { id: 5, nombre: 'Oruro' },
        { id: 6, nombre: 'Pando' },
        { id: 7, nombre: 'Potosí' },
        { id: 8, nombre: 'Santa Cruz' },
        { id: 9, nombre: 'Tarija' },
        { id: 10, nombre: 'Extranjero' },
    ];

    ciudades = ['La Paz', 'Santa Cruz', 'Cochabamba', 'Potosí', 'Tarija', 'Oruro', 'Sucre', 'Beni', 'Pando', 'Otra'];
    mediosPago = ['Depósito', 'Transferencia', 'QR', 'Tigo Money', 'Pago Personal en Oficinas'];

    constructor(
        public activeModal: NgbActiveModal,
        private service: PreinscripcionService
    ) {}

    subirArchivo(event: Event, campo: keyof typeof this.archivos): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        this.subiendo[campo] = true;
        this.service.uploadFile(file).subscribe({
            next: (res) => {
                this.archivos[campo] = res.url;
                this.subiendo[campo] = false;
            },
            error: () => {
                this.subiendo[campo] = false;
                alert('Error al subir el archivo. Intente nuevamente.');
            }
        });
    }

    siguientePaso(): void {
        this.paso = 2;
    }

    anteriorPaso(): void {
        this.paso = 1;
    }

    enviar(): void {
        this.enviando = true;
        this.error = '';
        this.service.store({
            programa_id: this.programaId,
            nombre: this.form.nombre,
            apellido_paterno: this.form.apellido_paterno,
            apellido_materno: this.form.apellido_materno,
            fecha_nacimiento: this.form.fecha_nacimiento,
            email: this.form.email,
            ci: this.form.ci,
            expedido_id: this.form.expedido_id ?? undefined,
            telefono: this.form.telefono,
            ciudad: this.form.ciudad,
            provincia: this.form.provincia,
            medio_pago: this.form.medio_pago,
            monto_pagado: this.form.monto_pagado ?? undefined,
            archivo_ci_anverso: this.archivos.ci_anverso ?? undefined,
            archivo_titulo: this.archivos.titulo ?? undefined,
            archivo_cv: this.archivos.cv ?? undefined,
            archivo_foto_3x3: this.archivos.foto_3x3 ?? undefined,
            sugerencia_curso: this.form.sugerencia_curso,
            recomendar_docente: this.form.recomendar_docente,
            detalle_docente: this.form.detalle_docente,
            origen: 'portal',
        }).subscribe({
            next: () => { this.enviando = false; this.exito = true; },
            error: (err) => {
                this.enviando = false;
                this.error = err?.error?.message || 'Ocurrió un error. Intente nuevamente.';
            }
        });
    }
}
