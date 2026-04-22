import type { CursoType } from '@/types';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

const STORAGE_BASE = 'http://localhost:8000';

@Component({
    selector: 'app-curso-card',
    imports: [RouterLink],
    templateUrl: './curso-card.component.html',
    styles: ``
})
export class CursoCardComponent {
    @Input() curso!: CursoType;
    @Input() index: number = 0;

    get numero(): string {
        return String(this.index + 1).padStart(2, '0');
    }

    get imagen(): string {
        const foto = this.curso.foto;
        if (foto) {
            return foto.startsWith('/') ? `${STORAGE_BASE}${foto}` : foto;
        }
        return 'assets/img/all-images/service-img1.png';
    }
}
