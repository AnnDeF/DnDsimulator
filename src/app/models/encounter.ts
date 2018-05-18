import { Monster } from "./monster";
import { Hero } from "./hero";

export class Encounter{
    id:number;
    encounterNaam: string;
    selectedMonsters:Monster[];
    selectedHeroes:Hero[];
}