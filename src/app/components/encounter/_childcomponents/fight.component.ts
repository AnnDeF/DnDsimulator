import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EncounterService } from '../../../services/encounter.service';
import { GameService } from '../../../services/game.service';
import { Creature } from '../../../models/creature';
import { Encounter } from '../../../models/encounter';
import { ActivatedRoute } from '@angular/router';
import { Monster } from '../../../models/monster';


@Component({
  selector: 'fight',
  templateUrl: './fight.html',
  styleUrls: ['./fight.css']
})

export class FightComponent implements OnInit {
  private initiativeNumbers: number[];
  private creatures: Creature[];
  private sortedCreatures: Creature[];
  private heroes: Creature[];
  private idx: number = 0;
  private sub: any;

  private showStart: boolean = true;
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

  public getInitiative(creature: Creature): number {
    const idx = this.creatures.indexOf(creature);
    return this.initiativeNumbers[idx];
  }

  public getTotal(creature: Creature): number {
    const init = creature.init;
    const rolled = this.getInitiative(creature);

    if ((init + rolled) > 20) {
      return 20;
    }

    return (init + rolled);
  }

  public onInitiativeChanged(newValue: number, creature: Creature) {
    const idx = this.creatures.indexOf(creature);
    this.initiativeNumbers[idx] = newValue;

    this.sort();
  }

  private sort(): void {
    this.sortedCreatures = this.creatures.concat().sort((a, b) => this.sortByInitiative(a, b));
  }

  sortByInitiative(a: Creature, b: Creature): number {
    if (this.initiativeNumbers.length == 0)
      return b.init - a.init;

    const totalA = this.getTotal(a);
    const totalB = this.getTotal(b);

    const result = totalB - totalA;

    return result;
  }

  // Spel
  toggleVisibility(monster: Monster) {
    monster.isVisible = !monster.isVisible;
    // TODO:
    //this.monsterService.update
  }

  removeFromFight(creature: Creature) {
    if (!creature.isMonster) {
      if (confirm("Are you sure you want to delete this hero?")) {
        const idx = this.sortedCreatures.indexOf(creature);
        this.sortedCreatures.splice(idx, 1)
      }
    }
  }

  previous() {
    const usefullCreatures = this.getUseFullCreatures();
    const currentCreature = this.sortedCreatures[this.idx];
    let usefullIdx = usefullCreatures.indexOf(currentCreature);

    if (usefullIdx == 0) {
      usefullIdx = usefullCreatures.length - 1;
    } else {
      usefullIdx--;
    }

    const nextCreature = usefullCreatures[usefullIdx];
    this.idx = this.sortedCreatures.indexOf(nextCreature);
  }

  next() {
    const usefullCreatures = this.getUseFullCreatures();
    const currentCreature = this.sortedCreatures[this.idx];
    let usefullIdx = usefullCreatures.indexOf(currentCreature);

    if (usefullIdx == usefullCreatures.length - 1) {
      usefullIdx = 0;
    } else {
      usefullIdx++;
    }

    const nextCreature = usefullCreatures[usefullIdx];
    this.idx = this.sortedCreatures.indexOf(nextCreature);
  }

  private getUseFullCreatures(): Creature[] {
    let usefullCreatures = this.sortedCreatures.filter(creature => {
      if (creature.isMonster && creature['isVisible'] == false)
        return false;
        
      return true;
    });

    return usefullCreatures;
  }

  public onHealthPositiveChanged(newValue: number, creature: Creature) {
    const health = creature.battleHP;
    const healPower = newValue;
    const newBattleHP = healPower + health;

    if (newBattleHP > creature.maxHP) { return creature.maxHP }
    else return newBattleHP;

  }

  public onHealthNegativeChanged(newValue: number, creature: Creature) {
    const idx = this.creatures.indexOf(creature);
    this.initiativeNumbers[idx] = newValue;
  }

}



// public getTotal(creature: Creature) : number {
//   const init = creature.init;
//   const rolled = this.getInitiative(creature);

//   if ((init + rolled) > 20)  {
//     return 20;
//   }

//   return (init + rolled);
// }


  //   Heal(heal: number) {
  //     var newHP = this.hero.battleHP + heal;

  //     if (newHP > this.hero.maxHP) {
  //         return this.hero.maxHP;
  //     }
  //     else return newHP;
  // };

  // doDamage(damage: number) {
  //     var newHP = this.hero.battleHP - damage;
  //     if (newHP <= 0) {
  //         return 0;
  //     }
  //     else {
  //         return newHP;
  //     }
  // };