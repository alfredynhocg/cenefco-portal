import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

const API_BASE = 'http://localhost:8000/api';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
    private readonly TOKEN_KEY = 'cenefco_admin_token';

    constructor(private http: HttpClient) {}

    login(email: string, password: string): Observable<any> {
        return this.http.post(`${API_BASE}/auth/login`, { email, password }).pipe(
            tap((res: any) => {
                if (res?.token) {
                    localStorage.setItem(this.TOKEN_KEY, res.token);
                }
            })
        );
    }

    logout(): void {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    getToken(): string | null {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    isLoggedIn(): boolean {
        return !!this.getToken();
    }

    authHeaders(): { [key: string]: string } {
        return { Authorization: `Bearer ${this.getToken()}` };
    }
}
