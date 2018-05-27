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
    })
  }

  public saveEncounter(): void {
    this.encounterService.updateEncounter(this._encounter).subscribe();
  }

  public removeMonsterFromEncounter(monster: Monster): void {
    const idx = this._encounter.selectedMonsters.indexOf(monster);
    this._encounter.selectedMonsters.splice(idx, 1)
  }

  public removeHeroFromEncounter(hero: Hero): void {
    const idx = this._encounter.selectedHeroes.indexOf(hero);
    this._encounter.selectedHeroes.splice(idx, 1)
  }

  public clearEncounter(encounter): void {
    this._encounter.selectedHeroes = [];
    this._encounter.selectedMonsters = [];
    this.encounterService.updateEncounter(this._encounter).subscribe();
  }

  public startGame(): void {
    this.gameService.startGame();
  }

  public isMonster(creature): boolean {
    if (creature instanceof Monster) {
      return true;
    }
    else return false;
  }

}
