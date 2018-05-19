// import { Injectable } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";
// import { Observable } from "rxjs";
// import { Hero } from "../models/hero";
// import { Monster } from "../models/monster";
// import { Encounter } from "../models/encounter";

// const headerInfo = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

// @Injectable()
// export class ApiService {

//     private heroesUrl = 'api/heroes';
//     private monstersUrl = 'api/monsters';
//     private encountersUrl = 'api/encounters';

//     constructor(private http: HttpClient) { }

//     public getObjects(): Observable<Object[]> {
//         if(Object instanceof Hero){
//         return this.http.get<Hero[]>(this.heroesUrl);
//         }
//         if(Object instanceof Monster){
//             return this.http.get<Monster[]>(this.monstersUrl);
//             }
//             if(Object instanceof Encounter){
//                 return this.http.get<Encounter[]>(this.encountersUrl);
//             }
//     }

//     public getHero(id: number): Observable<Hero> {
//         const url = `${this.heroesUrl}/${id}`;
//         return this.http.get<Hero>(url);
//     }

//     public deleteHero(id: number): Observable<Hero> {
//         const url = `${this.heroesUrl}/${id}`;
//         return this.http.post<Hero>(url, headerInfo);
//     }

//     public updateHero(hero: Hero): Observable<Hero> {
//         return this.http.post<Hero>(this.heroesUrl, hero, headerInfo);
//     }

//     public addHero(hero: Hero): Observable<Hero>{
//         return this.http.post<Hero>(this.heroesUrl, hero, headerInfo);
//     }

// }