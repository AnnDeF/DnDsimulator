import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Creature } from "../models/creature";
import { Observable } from "rxjs";

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
    
}