import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Monster } from '../models/monster';

@Injectable()
export class GameService {
private selectedHeroes:Hero[] = [];
private selectedMonsters:Monster[] = [];

  constructor() { }

  addToEncounter(object: Object){
    if (object instanceof Hero){
      this.selectedHeroes.push(object);
    }
    else if (object instanceof Monster){
      this.selectedMonsters.push(object);
    }
  }

  getSelectedMonsters(){
    return this.selectedMonsters;
  }

  getSelectedHeroes(){
    return this.getSelectedHeroes;
  }

}
