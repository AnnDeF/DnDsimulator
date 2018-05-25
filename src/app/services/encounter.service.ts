import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encounter } from '../models/encounter';

const headerInfo = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class EncounterService {
  private encountersUrl = 'api/encounters';

    constructor(private http: HttpClient) { }

    public getEncounters(): Observable<Encounter[]> {
        return this.http.get<Encounter[]>(this.encountersUrl);
    }

    public getEncounter(id: number): Observable<Encounter> {
        const url = `${this.encountersUrl}/${id}`;
        return this.http.get<Encounter>(url);
    }

    public deleteEncounter(id: number): Observable<Encounter> {
        const url = `${this.encountersUrl}/${id}`;
        return this.http.delete<Encounter>(url, headerInfo);
    }

    public updateEncounter(Encounter: Encounter): Observable<Encounter> {
        return this.http.post<Encounter>(this.encountersUrl, Encounter, headerInfo);
    }

    public addEncounter(Encounter: Encounter): Observable<Encounter>{
        return this.http.post<Encounter>(this.encountersUrl, Encounter, headerInfo);
    }
}
