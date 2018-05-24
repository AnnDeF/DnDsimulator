import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { Monster } from '../models/monster';
import { EncounterService } from './encounter.service';
import { Router } from '@angular/router';
import { Encounter } from '../models/encounter';
import { map, take } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class GameService {
  private _onHeroSelected = new Subject<Hero>();
  public get onHeroSelected(): Observable<Hero> { return this._onHeroSelected.asObservable(); };

  private _onMonsterSelected = new Subject<Monster>();
  public get onMonsterSelected(): Observable<Monster> { return this._onMonsterSelected.asObservable(); };

  private _encounter = new Subject<Encounter>();
  public get encounter(): Observable<Encounter> { return this._encounter.asObservable(); };

  private _initiativeNumbers = new Subject<number[]>();
  public get initiativeNumbers(): Observable<number[]> { return this._initiativeNumbers.asObservable(); };

  private currentEncounter : Encounter;
  private showInitiative : boolean = false;
  private showFight: boolean = false;

  constructor(
    private encounterService: EncounterService,
    private router: Router
  ) { }

  startNewEncounter(encounterNaam: string): void {
    const encounter = new Encounter();
    encounter.playerName = []
    encounter.encounterNaam = encounterNaam;
    encounter.selectedHeroes = [];
    encounter.selectedMonsters = [];

    this.encounterService.addEncounter(encounter)
      .pipe(map((encounter) => {
        this.router.navigate(['/main', encounter.id]);
        this.currentEncounter = encounter;
        this._encounter.next(encounter);
      })
      ).subscribe();
  }

  openEncounter(encounterId: number): void {
    this.encounterService.getEncounter(encounterId)
      .subscribe(encounter => {
        this.router.navigate(['/main', encounter.id]);
        this.currentEncounter = encounter;
        this._encounter.next(encounter);
      });
  }

  addHero(hero: Hero) {
    this._onHeroSelected.next(hero);
  }

  addMonster(monster: Monster) {
    this._onMonsterSelected.next(monster);
  }

  public startGame() {
    this.showInitiative = true;
  }

  rollInitiative(): number {
    return Math.floor(Math.random() * 20) + 1;
  }

  public initiativeDecided(initiativeNumbers: number[]) {
    this.showInitiative = false;
    this.showFight = true;

    this.currentEncounter.selectedMonsters.forEach(monster => monster.isVisible = true);

    this._initiativeNumbers.next(initiativeNumbers);
  }
}
