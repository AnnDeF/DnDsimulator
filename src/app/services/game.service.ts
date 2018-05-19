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
  private selectedMonsters: Monster[] = [];

  private _onHeroSelected = new Subject<Hero>();
  public get onHeroSelected(): Observable<Hero> { return this._onHeroSelected.asObservable(); };

  constructor(
    private encounterService: EncounterService,
    private router: Router
  ) { }

  startNewGame(): void {
    this.encounterService.addEncounter(new Encounter())
      .pipe(map((encounter) => {
        this.router.navigate(['/encounter', encounter.id]);
      })
      ).subscribe();
  }

  openEncounter(number: number) {
    this.encounterService.getEncounter(number);
  }

  addHero(hero: Hero) {
    this._onHeroSelected.next(hero);
  }

  addToEncounter(object: Object) {
    if (object instanceof Monster) {
      this.selectedMonsters.push(object);
    }
  }

  getSelectedMonsters() {
    return this.selectedMonsters;
  }

}
