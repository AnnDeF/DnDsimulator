export interface Creature {
    id: number;
    naam: string;
    maxHP: number; //HitPoints
    battleHP: number;
    AC: number; //ArmorClass 
    init: number; //initiatiefModifier
    isMonster:boolean;
}