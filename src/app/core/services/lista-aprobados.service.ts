import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

const API = 'http://localhost:8000/api/v1';

@Injectable({ providedIn: 'root' })
export class ListaAprobadosService {
    constructor(private http: HttpClient, private auth: AdminAuthService) {}

    private h(): { headers: HttpHeaders } {
        return { headers: new HttpHeaders(this.auth.authHeaders()) };
    }

    index(params: any = {}): Observable<any> {
        return this.http.get(`${API}/lista-aprobados`, { ...this.h(), params });
    }

    store(data: any): Observable<any> {
        return this.http.post(`${API}/lista-aprobados`, data, this.h());
    }

    update(id: number, data: any): Observable<any> {
        return this.http.put(`${API}/lista-aprobados/${id}`, data, this.h());
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API}/lista-aprobados/${id}`, this.h());
    }
}
