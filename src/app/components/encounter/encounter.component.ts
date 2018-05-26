import { Component, OnInit, OnDestroy } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Encounter } from '../../models/encounter';
import { EncounterService } from '../../services/encounter.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit, OnDestroy {
  private sub: Subject<boolean> = new Subject<boolean>();
  private encounter: Encounter;


  constructor(
    private encounterService: EncounterService,
    private gameService: GameService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.gameService.onHeroSelected
      .pipe(takeUntil(this.sub))
      .subscribe(hero => {
        this.encounter.selectedHeroes.push(hero);
      });

    this.gameService.onMonsterSelected
      .pipe(takeUntil(this.sub))
      .subscribe(monster => {
        this.encounter.selectedMonsters.push(monster);
      });

    this.gameService.encounter
      .pipe(takeUntil(this.sub))
      .subscribe(encounter => {
        this.encounter = encounter;
      });

    this.route.params
      .pipe(takeUntil(this.sub))
      .subscribe(params => {
        let id = +params['id']; // (+) converts string 'id' to a number
        this.gameService.openEncounter(id);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
