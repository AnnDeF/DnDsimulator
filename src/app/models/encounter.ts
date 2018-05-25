import { Monster } from "./monster";
import { Hero } from "./hero";

export class Encounter{
    id:number;
    playerName: string;
    encounterNaam: string;
    selectedMonsters:Monster[];
    selectedHeroes:Hero[];
}