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
  private heroesAlive: Creature[];
  private monstersAliveAndInVisible: Creature[];
  private monstersAliveAndVisible: Creature[];
  private usefullCreatures:Creature[];
  private idx: number = 0;
  private sub: any;

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
    console.log(this._encounter);
  }

  // bepalen initiatief en sorteren
  public decideInitiative(): void {
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

  public onInitiativeChanged(newValue: number, creature: Creature): void {
    const idx = this.creatures.indexOf(creature);
    this.initiativeNumbers[idx] = newValue;

    this.sort();
  }

  private sort(): void {
    this.sortedCreatures = this.creatures.concat().sort((a, b) => this.sortByInitiative(a, b));
  }

  public sortByInitiative(a: Creature, b: Creature): number {
    if (this.initiativeNumbers.length == 0)
      return b.init - a.init;

    const totalA = this.getTotal(a);
    const totalB = this.getTotal(b);

    const result = totalB - totalA;

    return result;
  }


  //toolbar
  public previous(): void {
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

  public next(): void {
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

  // Spel
  public toggleVisibility(monster: Monster): void {
    monster.isVisible = !monster.isVisible;
    this.monsterService.updateMonster(monster).subscribe();
  }

  public removeFromFight(creature: Creature): void {
    if (!creature.isMonster) {
      if (confirm("Ben je zeker dat je deze held wilt verwijderen uit het gevecht?")) {
        const idx = this.sortedCreatures.indexOf(creature);
        this.sortedCreatures.splice(idx, 1)
      }
    }
  }

  private getUseFullCreatures(): Creature[] {
    this.usefullCreatures = this.sortedCreatures.filter(creature => {
      if (creature.isMonster && creature['isVisible'] == false)
        return false;
      if (creature.battleHP == 0)
        return false;

      return true;
    });

    this.heroesAlive = this.usefullCreatures.filter(creature => !creature.isMonster);
    this.monstersAliveAndVisible = this.creatures.filter(creature => creature.isMonster && creature.battleHP > 0 && creature['isVisible'] == true);
    this.monstersAliveAndInVisible = this.creatures.filter(creature => creature.isMonster && creature.battleHP > 0 && creature['isVisible'] == false);

    console.log('get usefull creatures...', this.heroesAlive.length, this.monstersAliveAndInVisible.length, this.monstersAliveAndVisible.length);

    if (this.heroesAlive.length == 0) {
      if (confirm("Game over! Alle helden zijn verslagen. Wil je een nieuw spel beginnen?")) {
        this.router.navigate(['']);
      }
    }

    if (this.monstersAliveAndInVisible.length == 0 && this.monstersAliveAndVisible.length == 0) {
      if (confirm("Gewonnen! Alle monsters zijn verslagen. Wil je een nieuw spel starten?")) {
        this.router.navigate(['']);
      }
    }

    if (this.heroesAlive.length > 0 && this.monstersAliveAndInVisible.length > 0 && this.monstersAliveAndVisible.length == 0) {
      if (confirm("Alle zichtbare monsters zijn verslagen. Wil je het spel beëindigen? Zo niet, annuleer en stel de monsters opnieuw in op zichtbaar.")) {
        this.router.navigate(['']);
      }
    }

    return this.usefullCreatures;
  }

  public onHealthPositiveChanged(healthPower: number, creatureId: number): void {
    let ally = this.heroesAlive.find(hero => hero.id == creatureId);

    ally.battleHP += healthPower;
    if (this.percentage(ally) > 50) {
      ally['isDying'] = false;
    }

    if (ally.battleHP > ally.maxHP) {
      ally.battleHP = ally.maxHP
    }

    this.heroesService.updateHero(ally).subscribe();
  }

  public onHealthNegativeChanged(damage: number, creatureId: number): void {
    let foe = this.creatures.find(creature => creature.id == creatureId);

    foe.battleHP -= damage;

    if (this.percentage(foe) <= 50) {
      foe['isDying'] = true;
    }
    if (foe.battleHP <= 0) {
      foe.battleHP = 0;
      foe['isDead']=true;
    };

    if (foe.isMonster) { this.monsterService.updateCreature(foe).subscribe(); }
    else { this.heroesService.updateHero(foe).subscribe(); }
  }

  public getCurrentHealthPercentage(creature: Creature): string {
    const percentage = this.percentage(creature);
    if (percentage > 50) {
      return percentage + "%";
    }
    else {
      return percentage + "%";
    }
  }

  public getProgressClass(creature: Creature) {
    const percentage = this.percentage(creature);

    if (percentage == 100) return 'bg-success';
    if (percentage > 50) return 'bg-info';
    if (percentage > 20) return 'bg-warning';

   return 'bg-danger';
  }

  private percentage(creature: Creature): number {
    return (creature.battleHP / creature.maxHP) * 100;
  }
}

