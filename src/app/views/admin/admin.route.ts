import { Routes } from '@angular/router';
import { adminGuard } from '@core/guards/admin.guard';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

export const ADMIN_ROUTES: Routes = [
    {
        path: 'admin/login',
        component: AdminLoginComponent,
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        canActivate: [adminGuard],
        children: [
            { path: '', redirectTo: 'certificados', pathMatch: 'full' },
            {
                path: 'certificados',
                loadComponent: () =>
                    import('./certificados/certificados.component').then(m => m.AdminCertificadosComponent),
            },
            {
                path: 'plantillas',
                loadComponent: () =>
                    import('./plantillas/plantillas.component').then(m => m.AdminPlantillasComponent),
            },
            {
                path: 'plantillas/:id/campos',
                loadComponent: () =>
                    import('./plantillas/plantilla-campos.component').then(m => m.AdminPlantillaCamposComponent),
            },
            {
                path: 'lista-aprobados',
                loadComponent: () =>
                    import('./lista-aprobados/lista-aprobados.component').then(m => m.AdminListaAprobadosComponent),
            },
        ],
    },
];
