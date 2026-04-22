import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AdminAuthService } from '@core/services/admin-auth.service';

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {
    constructor(private auth: AdminAuthService, private router: Router) {}

    logout(): void {
        this.auth.logout();
        this.router.navigate(['/admin/login']);
    }
}
