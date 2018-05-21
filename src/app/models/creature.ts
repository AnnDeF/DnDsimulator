export interface Creature {
    id: number;
    naam: string;
    maxHP: number; //HitPoints
    battleHP: number;
    AC: number; //ArmorClass 
    Init: number; //initiatiefModifier
}