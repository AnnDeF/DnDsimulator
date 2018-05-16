import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Creature } from "../models/creature";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class CreatureService {

private creaturesUrl = 'api/creatures';

    constructor(private http: HttpClient){}

    public getCreatures(): Observable<Creature[]>{
        return this.http.get<Creature[]>(this.creaturesUrl);
    }

    public getCreature(id: number): Observable<Creature>{
        const url = `${this.creaturesUrl}/${id}`;
        return this.http.get<Creature>(url);
    }
    
    public deleteCreature (id: number): Observable<Creature> {
        const url = `${this.creaturesUrl}/${id}`;
    
        return this.http.delete<Creature>(url, cudOptions);
      }
    
}