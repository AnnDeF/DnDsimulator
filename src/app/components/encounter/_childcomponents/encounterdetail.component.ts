import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Encounter } from '../../../models/encounter';
import { EncounterService } from '../../../services/encounter.service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Creature } from '../../../models/creature';
import { Hero } from '../../../models/hero';
import { Monster } from '../../../models/monster';


@Component({
  selector: 'encounterdetail',
  templateUrl: './encounterdetail.html'
})

export class EncounterDetailComponent implements OnInit {
  @Output()
  change: EventEmitter<Creature> = new EventEmitter<Creature>();

  private _encounter: Encounter = null;
  
  @Input()
  set encounter(encounter: Encounter) {
    this._encounter = encounter;
    if (this._encounter == null) return;
  }

  private initiativeNumbers: number[] = [];
  private creatures: Creature[];

  constructor(
    private encounterService: EncounterService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.gameService.initiativeNumbers.subscribe(newNumbers => {
      this.initiativeNumbers = newNumbers;
      console.log(this.initiativeNumbers);
    })
  }

  saveEncounter() {
    this.encounterService.updateEncounter(this._encounter).subscribe();
  }

  removeMonsterFromEncounter(monster: Monster) {
    const idx = this._encounter.selectedMonsters.indexOf(monster);
    this._encounter.selectedMonsters.splice(idx, 1)
  }

  removeHeroFromEncounter(hero:Hero) {
    const idx = this._encounter.selectedHeroes.indexOf(hero);
    this._encounter.selectedHeroes.splice(idx, 1)
  }

  clearEncounter(encounter) {
    this._encounter.selectedHeroes = [];
    this._encounter.selectedMonsters = [];
    this.encounterService.updateEncounter(this._encounter).subscribe();
  }

  startGame() {
    this.gameService.startGame();
  }

  isMonster(creature):boolean{
    if (creature instanceof Monster){
      return true;
    }
    else return false;
  }

  // public getInitiative(creature: Creature) : number {
  //   const idx = this.creatures.indexOf(creature);
  //   return this.initiativeNumbers[idx];
  // }

  // public getTotal(creature: Creature) : number {
  //   const init = creature.init;
  //   const rolled = this.getInitiative(creature);

  //   if ((init + rolled) > 20)  {
  //     return 20;
  //   }

  //   return (init + rolled);
  // }

  // sortByInitiative(a: Creature, b: Creature) : number {
  //   if (this.initiativeNumbers.length == 0)
  //     return b.init - a.init;
    
  //   const totalA = this.getTotal(a);
  //   const totalB = this.getTotal(b);
    
  //   const result = totalB - totalA;

  //   return result;
  // }

}
