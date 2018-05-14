import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { creature } from "../models/creature";

@Injectable()
export class CreatureService {

    constructor(private http: HttpClient){}

    public getCreatures(){
    }

    public getHeroes(){}

    public getHero(id: number){}

    public getMonsters(){}

    public getMonster(id: number){}
}