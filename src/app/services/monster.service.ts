import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Monster } from "../models/monster";


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class MonsterService {
  private monstersUrl = 'api/monsters';

  constructor(private http:HttpClient) { }

  public getMonsters(): Observable<Monster[]>{
    return this.http.get<Monster[]>(this.monstersUrl);
}

public getMonster(id: number): Observable<Monster>{
    const url = `${this.monstersUrl}/${id}`;
    return this.http.get<Monster>(url);
}

public deleteMonster(id: number): Observable<Monster> {
    const url = `${this.monstersUrl}/${id}`;
    return this.http.delete<Monster>(url, cudOptions);
  }
}
