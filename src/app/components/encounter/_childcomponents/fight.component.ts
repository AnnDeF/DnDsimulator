import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EncounterService } from '../../../services/encounter.service';
import { GameService } from '../../../services/game.service';
import { Creature } from '../../../models/creature';
import { Encounter } from '../../../models/encounter';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'fight',
  templateUrl: './fight.html',
  styleUrls: ['./fight.css']
})

export class FightComponent implements OnInit {
  private initiativeNumbers: number[];
  private creatures: Creature[];
  private sortedCreatures: Creature[];
  private heroes:Creature[];
  private idx:number = 0;
  private sub: any;

  private showStart:boolean = true;
  private showPlayButtons: boolean = false;
  

  private _encounter: Encounter = null;
  @Input()
  set encounter(encounter: Encounter) {
    this._encounter = encounter;
    if (this._encounter == null) return;
    this.creatures = this._encounter.selectedHeroes.concat(this._encounter.selectedMonsters);
  }

  constructor(
    private encounterService: EncounterService,
    private gameService: GameService, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.decideInitiative();
  }

  // bepalen initiatief en sorteren
  decideInitiative() {
    this.initiativeNumbers = [];

    this.creatures.forEach(creature => {
      this.initiativeNumbers.push(this.gameService.rollInitiative());
    });
    
    this.sort();
  }

  public getInitiative(creature: Creature) : number {
    const idx = this.creatures.indexOf(creature);
    return this.initiativeNumbers[idx];
  }

  public getTotal(creature: Creature) : number {
    const init = creature.init;
    const rolled = this.getInitiative(creature);

    if ((init + rolled) > 20)  {
      return 20;
    }

    return (init + rolled);
  }

  public onInitiativeChanged(newValue: number, creature: Creature) {
    const idx = this.creatures.indexOf(creature);
    this.initiativeNumbers[idx] = newValue;

    this.sort();
  }

  private sort() : void {
    this.sortedCreatures = this.creatures.concat().sort((a, b) => this.sortByInitiative(a, b));
  }

  sortByInitiative(a: Creature, b: Creature) : number {
    if (this.initiativeNumbers.length == 0)
      return b.init - a.init;
    
    const totalA = this.getTotal(a);
    const totalB = this.getTotal(b);
    
    const result = totalB - totalA;

    return result;
  }


  // Spel
  isMonster(): boolean{
    return true;
  }

  toggleVisibility():boolean{
    return true;
  }

  removeFromFight(creature: Creature){
    if(!creature.isMonster)
    {
     if(confirm("Are you sure you want to delete this hero?")){
      const idx = this.creatures.indexOf(creature);
      this.creatures.splice(idx, 1)
     }
     else {"Continue game"}
    }
  }

  previous(){
    (this.idx)--;
  }

  next(){
    (this.idx)++;
  }

  doDamage(){}

  heal(){}

}
