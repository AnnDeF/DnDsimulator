import { Creature } from "./creature";

export class Monster implements Creature {
    id: number;
    naam: string;
    maxHP: number; //HitPoints
    battleHP: number;
    AC: number; //ArmorClass 
    init: number; //initiatiefModifier

    isMonster: boolean = true;
    isVisible: boolean = true;
}