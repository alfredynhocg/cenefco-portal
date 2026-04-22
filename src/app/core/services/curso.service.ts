import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import type { CursoType } from '@/types';

export interface CursoListResponse {
    data: CursoType[];
    total: number;
}

const API_BASE = 'http://localhost:8000/api/v1';

@Injectable({ providedIn: 'root' })
export class CursoService {
    private base = `${API_BASE}/public/cursos`;

    constructor(private http: HttpClient) {}

    getAll(params?: { pageIndex?: number; pageSize?: number; query?: string }): Observable<CursoListResponse> {
        let httpParams = new HttpParams();
        if (params?.pageIndex) httpParams = httpParams.set('pageIndex', params.pageIndex);
        if (params?.pageSize)  httpParams = httpParams.set('pageSize', params.pageSize);
        if (params?.query)     httpParams = httpParams.set('query', params.query);
        return this.http.get<CursoListResponse>(this.base, { params: httpParams });
    }

    getById(id: number): Observable<CursoType> {
        return this.http.get<CursoType>(`${this.base}/${id}`);
    }
}
