import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

const API = 'http://localhost:8000/api/v1';

@Injectable({ providedIn: 'root' })
export class CertPlantillaService {
    constructor(private http: HttpClient, private auth: AdminAuthService) {}

    private h(): { headers: HttpHeaders } {
        return { headers: new HttpHeaders(this.auth.authHeaders()) };
    }

    index(params: any = {}): Observable<any> {
        return this.http.get(`${API}/cert-plantillas`, { ...this.h(), params });
    }

    show(id: number): Observable<any> {
        return this.http.get(`${API}/cert-plantillas/${id}`, this.h());
    }

    store(data: any): Observable<any> {
        return this.http.post(`${API}/cert-plantillas`, data, this.h());
    }

    update(id: number, data: any): Observable<any> {
        return this.http.put(`${API}/cert-plantillas/${id}`, data, this.h());
    }

    destroy(id: number): Observable<any> {
        return this.http.delete(`${API}/cert-plantillas/${id}`, this.h());
    }

    uploadImage(file: File): Observable<{ url: string }> {
        const fd = new FormData();
        fd.append('file', file);
        return this.http.post<{ url: string }>(`${API}/upload/image`, fd, this.h());
    }

    // Campos
    indexCampos(plantillaId: number): Observable<any> {
        return this.http.get(`${API}/cert-plantilla-campos`, { ...this.h(), params: { plantilla_id: plantillaId, pageSize: 50 } });
    }

    storeCampo(data: any): Observable<any> {
        return this.http.post(`${API}/cert-plantilla-campos`, data, this.h());
    }

    updateCampo(id: number, data: any): Observable<any> {
        return this.http.put(`${API}/cert-plantilla-campos/${id}`, data, this.h());
    }

    destroyCampo(id: number): Observable<any> {
        return this.http.delete(`${API}/cert-plantilla-campos/${id}`, this.h());
    }
}
