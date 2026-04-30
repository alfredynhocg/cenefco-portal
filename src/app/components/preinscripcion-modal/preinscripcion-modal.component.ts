import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PreinscripcionService } from '@core/services/preinscripcion.service';
import type { CategoriaCampo } from '@/types';

// Campos dinámicos que tienen columna dedicada en web_preinscripcion.
// Se envían como propiedades de primer nivel, no dentro de campos_extra.
const COLUMNAS_MAPEADAS = new Set([
    // Datos personales (paso 1)
    'nombre', 'apellido_paterno', 'apellido_materno', 'fecha_nacimiento',
    'email', 'ci', 'expedido_id', 'telefono',
    // Datos adicionales (paso 2)
    'ciudad', 'provincia', 'medio_pago', 'monto_pagado',
    'sugerencia_curso', 'recomendar_docente', 'detalle_docente',
]);

@Component({
    selector: 'app-preinscripcion-modal',
    imports: [CommonModule, FormsModule],
    templateUrl: './preinscripcion-modal.component.html',
    styles: ``
})
export class PreinscripcionModalComponent {
    @Input() programaId!: number;
    @Input() programaNombre!: string;
    @Input() camposDinamicos: CategoriaCampo[] = [];

    paso = 1;

    // Todos los valores del formulario viven en un solo diccionario
    valores: Record<string, unknown> = {};
    subiendoCampo: Record<string, boolean> = {};

    enviando = false;
    exito    = false;
    error    = '';

    constructor(
        public activeModal: NgbActiveModal,
        private service: PreinscripcionService
    ) {}

    get camposPaso1(): CategoriaCampo[] {
        return this.camposDinamicos.filter(c => c.activo && c.paso === 1);
    }

    get camposPaso2(): CategoriaCampo[] {
        return this.camposDinamicos.filter(c => c.activo && c.paso === 2);
    }

    get camposRequeridosPaso1Completos(): boolean {
        return this.camposPaso1
            .filter(c => c.requerido)
            .every(c => {
                const v = this.valores[c.nombre_campo];
                return v !== undefined && v !== null && v !== '';
            });
    }

    siguientePaso(): void {
        if (!this.camposRequeridosPaso1Completos) {
            this.error = 'Por favor complete todos los campos requeridos antes de continuar.';
            return;
        }
        this.error = '';
        this.paso = 2;
    }

    anteriorPaso(): void {
        this.error = '';
        this.paso = 1;
    }

    subirArchivo(event: Event, campo: CategoriaCampo): void {
        const input = event.target as HTMLInputElement;
        const file = input.files?.[0];
        if (!file) return;
        this.subiendoCampo[campo.nombre_campo] = true;
        this.service.uploadFile(file).subscribe({
            next: (res) => {
                this.valores[campo.nombre_campo] = res.url;
                this.subiendoCampo[campo.nombre_campo] = false;
            },
            error: () => {
                this.subiendoCampo[campo.nombre_campo] = false;
                alert('Error al subir el archivo. Intente nuevamente.');
            },
        });
    }

    campoEsArchivo(campo: CategoriaCampo): boolean {
        return campo.tipo_campo === 'file_pdf' || campo.tipo_campo === 'file_image';
    }

    aceptaArchivo(campo: CategoriaCampo): string {
        const accept = (campo.validacion as Record<string, unknown> | null)?.['accept'] as string | undefined;
        if (accept) return accept;
        return campo.tipo_campo === 'file_pdf' ? '.pdf,.jpg,.jpeg,.png' : 'image/*';
    }

    // Detecta si las opciones son objetos {id, nombre} (para selects con FK)
    opcionEsObjeto(campo: CategoriaCampo): boolean {
        const ops = campo.opciones;
        return Array.isArray(ops) && ops.length > 0 && typeof ops[0] === 'object' && ops[0] !== null;
    }

    private validarRequeridos(campos: CategoriaCampo[]): boolean {
        return campos
            .filter(c => c.requerido)
            .every(c => {
                const v = this.valores[c.nombre_campo];
                return v !== undefined && v !== null && v !== '';
            });
    }

    enviar(): void {
        if (!this.validarRequeridos(this.camposPaso2)) {
            this.error = 'Por favor complete todos los campos requeridos.';
            return;
        }
        this.enviando = true;
        this.error    = '';

        // Separar valores mapeados a columnas dedicadas del resto (va a campos_extra)
        const mapeados: Record<string, unknown> = {};
        const extra:    Record<string, unknown> = {};

        for (const [key, value] of Object.entries(this.valores)) {
            if (COLUMNAS_MAPEADAS.has(key)) {
                mapeados[key] = value;
            } else {
                extra[key] = value;
            }
        }

        this.service.store({
            programa_id:        this.programaId,
            nombre:             (mapeados['nombre'] as string | undefined) ?? '',
            apellido_paterno:   mapeados['apellido_paterno']   as string  | undefined,
            apellido_materno:   mapeados['apellido_materno']   as string  | undefined,
            fecha_nacimiento:   mapeados['fecha_nacimiento']   as string  | undefined,
            email:              (mapeados['email'] as string | undefined) ?? '',
            ci:                 mapeados['ci']                 as string  | undefined,
            expedido_id:        mapeados['expedido_id'] != null ? Number(mapeados['expedido_id']) : undefined,
            telefono:           mapeados['telefono']           as string  | undefined,
            ciudad:             mapeados['ciudad']             as string  | undefined,
            provincia:          mapeados['provincia']          as string  | undefined,
            medio_pago:         mapeados['medio_pago']         as string  | undefined,
            monto_pagado:       mapeados['monto_pagado'] != null ? Number(mapeados['monto_pagado']) : undefined,
            sugerencia_curso:   mapeados['sugerencia_curso']   as string  | undefined,
            recomendar_docente: mapeados['recomendar_docente'] as boolean | undefined,
            detalle_docente:    mapeados['detalle_docente']    as string  | undefined,
            campos_extra:       Object.keys(extra).length > 0 ? extra : undefined,
            origen:             'portal',
        }).subscribe({
            next:  () => { this.enviando = false; this.exito = true; },
            error: (err) => {
                this.enviando = false;
                this.error = err?.error?.message || 'Ocurrió un error. Intente nuevamente.';
            },
        });
    }
}
