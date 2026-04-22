import { Routes } from '@angular/router';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosSingleComponent } from './cursos-single/cursos-single.component';

export const CURSOS_ROUTES: Routes = [
    {
        path: 'cursos',
        component: CursosListComponent,
        data: { title: 'Programas' }
    },
    {
        path: 'cursos/:id',
        component: CursosSingleComponent,
        data: { title: 'Detalle del Programa' }
    },
];
