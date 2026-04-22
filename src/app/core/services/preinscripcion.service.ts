import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE = 'http://localhost:8000/api/v1';

export interface PreinscripcionPayload {
    programa_id?: number;
    nombre: string;
    apellido_paterno?: string;
    apellido_materno?: string;
    ci?: string;
    expedido_id?: number;
    fecha_nacimiento?: string;
    email: string;
    telefono?: string;
    ciudad?: string;
    provincia?: string;
    medio_pago?: string;
    monto_pagado?: number;
    archivo_ci_anverso?: string;
    archivo_titulo?: string;
    archivo_cv?: string;
    archivo_foto_3x3?: string;
    sugerencia_curso?: string;
    recomendar_docente?: boolean;
    detalle_docente?: string;
    mensaje?: string;
    origen?: string;
}

@Injectable({ providedIn: 'root' })
export class PreinscripcionService {
    constructor(private http: HttpClient) {}

    store(data: PreinscripcionPayload): Observable<any> {
        return this.http.post(`${API_BASE}/public/preinscripciones`, data);
    }

    uploadFile(file: File): Observable<{ url: string }> {
        const fd = new FormData();
        fd.append('file', file);
        return this.http.post<{ url: string }>(`${API_BASE}/public/upload/file`, fd);
    }
}
