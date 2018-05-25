import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Hero } from "../models/hero";

const headerInfo = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class HeroService {

    private heroesUrl = 'api/heroes';

    constructor(private http: HttpClient) { }

    public getHeroes(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    public getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url);
    }

    public deleteHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, headerInfo);
    }

    public updateHero(hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesUrl, hero, headerInfo);
    }

    public addHero(hero: Hero): Observable<Hero>{
        return this.http.post<Hero>(this.heroesUrl, hero, headerInfo);
    }

}