import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EncounterService } from '../../../services/encounter.service';
import { GameService } from '../../../services/game.service';
import { Creature } from '../../../models/creature';
import { Encounter } from '../../../models/encounter';
import { ActivatedRoute, Router } from '@angular/router';
import { Monster } from '../../../models/monster';
import { MonsterService } from '../../../services/monster.service';
import { HeroService } from '../../../services/hero.service';


@Component({
  selector: 'fight',
  templateUrl: './fight.html',
  styleUrls: ['./fight.css']
})

export class FightComponent implements OnInit {
  private initiativeNumbers: number[];
  private creatures: Creature[];
  private playerName: string;
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
    this.playerName = this._encounter.playerName;
    this.creatures = this._encounter.selectedHeroes.concat(this._encounter.selectedMonsters);
  }

  constructor(
    private router: Router,
    private encounterService: EncounterService,
    private monsterService: MonsterService,
    private heroesService: HeroService,
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

    this.monsterService.updateMonster(monster).subscribe();
  }

  removeFromFight(creature: Creature) {
    if (!creature.isMonster) {
      if (confirm("Ben je zeker dat je deze held wilt verwijderen uit het gevecht?")) {
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
      if (creature.isMonster && creature['isVisible'] == false) { return false; }
      if (creature.battleHP == 0) {
        return false;
      }

      return true;
    });

    let heroesAlive = usefullCreatures.filter(creature => !creature.isMonster);
    let monstersAliveAndVisible = usefullCreatures.filter(creature => creature.isMonster && creature.battleHP > 0 && creature['isVisible'] == true);
    let monstersAliveAndInVisible = usefullCreatures.filter(creature => creature.isMonster && creature.battleHP > 0 && creature['isVisible'] == false);

    if (heroesAlive.length == 0) {
      confirm("Game over! Alle helden zijn verslagen. Wil je een nieuw spel beginnen?")
      {
        this.router.navigate[''];
      }
      if (monstersAliveAndInVisible.length == 0 && monstersAliveAndVisible.length == 0) {
        confirm("Gewonnen! Alle monsters zijn verslagen. Wil je een nieuw spel starten?")
        {
          this.router.navigate[''];
        }
      }

      if (heroesAlive.length > 0 && monstersAliveAndInVisible.length > 0 && monstersAliveAndVisible.length == 0) {
        confirm("Alle zichtbare monsters zijn verslagen. Wil je het spel beëindigen? Zo niet, annuleer en stel de monsters opnieuw in op zichtbaar.")
        {
          this.router.navigate[''];
        }
      }

    }

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

  //foutmelding geven als alle monsters op onzichtbaar staan - verder spelen?
  // alert als alle helden dood zijn => nieuw spel beginnen?
  // alle values teru gnaar originele waarden als spel herstart


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