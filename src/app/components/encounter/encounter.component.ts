import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { Encounter } from '../../models/encounter';
import { EncounterService } from '../../services/encounter.service';

@Component({
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.css']
})
export class EncounterComponent implements OnInit {
  private sub: any;
  private encounter: Encounter;

  constructor(
    private encounterService: EncounterService,
    private gameService: GameService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.gameService.onHeroSelected.subscribe(hero => {
      this.encounter.selectedHeroes.push(hero);
    });

    this.sub = this.route.params.subscribe(params => {
      let Id = +params['id']; // (+) converts string 'id' to a number

      this.encounterService.getEncounter(Id)
        .subscribe(encounter => {
          this.encounter = encounter;
        });
    });
  }

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

}
