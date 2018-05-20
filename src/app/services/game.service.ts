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

  constructor(
    private encounterService: EncounterService,
    private router: Router
  ) { }

  startNewGame(encounterNaam: string): void {
    this.encounterService.addEncounter(new Encounter())
      .pipe(map((encounter) => {
        this.router.navigate(['/encounter']);
        encounter.encounterNaam = encounterNaam;
        encounter.id = null;
        encounter.selectedHeroes = [];
        encounter.selectedMonsters = []
      })
      ).subscribe();
  }

  openEncounter(number: number) {
    this.encounterService.getEncounter(number);
  }

  addHero(hero: Hero) {
    this._onHeroSelected.next(hero);
  }

  addMonster(monster: Monster){
    this._onMonsterSelected.next(monster);
  }

}
