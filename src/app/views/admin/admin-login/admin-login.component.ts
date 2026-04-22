import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '@core/services/admin-auth.service';

@Component({
    selector: 'app-admin-login',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './admin-login.component.html',
})
export class AdminLoginComponent {
    email = '';
    password = '';
    loading = false;
    error = '';

    constructor(private auth: AdminAuthService, private router: Router) {}

    login(): void {
        this.loading = true;
        this.error = '';
        this.auth.login(this.email, this.password).subscribe({
            next: () => {
                this.loading = false;
                this.router.navigate(['/admin/certificados']);
            },
            error: (err) => {
                this.loading = false;
                this.error = err?.error?.message || 'Credenciales incorrectas.';
            },
        });
    }
}
