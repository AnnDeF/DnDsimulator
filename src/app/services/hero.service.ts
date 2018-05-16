import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Hero } from "../models/hero";

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class HeroService {

private heroesUrl = 'api/heroes';

// private handleError (error: any) {
//     console.error(error); // log to console instead
//     return throwError(error);
//   }

    constructor(private http: HttpClient){}

    public getHeroes(): Observable<Hero[]>{
        return this.http.get<Hero[]>(this.heroesUrl);
    }

    public getHero(id: number): Observable<Hero>{
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url);
    }
    
    public deleteHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete<Hero>(url, cudOptions);
      }

    

    
}