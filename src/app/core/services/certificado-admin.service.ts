import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

const API = 'http://localhost:8000/api/v1';

@Injectable({ providedIn: 'root' })
export class CertificadoAdminService {
    constructor(private http: HttpClient, private auth: AdminAuthService) {}

    private h(): { headers: HttpHeaders } {
        return { headers: new HttpHeaders(this.auth.authHeaders()) };
    }

    index(params: any = {}): Observable<any> {
        return this.http.get(`${API}/certificados`, { ...this.h(), params });
    }

    generarLote(imparteId: number, plantillaId: number): Observable<any> {
        return this.http.post(`${API}/certificados/generar-lote`, {
            imparte_id: imparteId,
            plantilla_id: plantillaId,
        }, this.h());
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API}/certificados/${id}`, this.h());
    }
}
