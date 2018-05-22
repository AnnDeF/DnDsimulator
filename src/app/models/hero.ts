import { Creature } from "./creature";

export class Hero implements Creature {
    id: number;
    naam: string;
    maxHP: number; //HitPoints
    battleHP: number;
    AC: number; //ArmorClass 
    init: number; //initiatiefModifier
    isMonster:boolean = false;
}