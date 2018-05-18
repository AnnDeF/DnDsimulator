import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../models/encounter';
import { EncounterService } from '../../services/encounter.service';
import { HeroService } from '../../services/hero.service';
import { MonsterService } from '../../services/monster.service';
import { Hero } from '../../models/hero';
import { Monster } from '../../models/monster';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'encounterdetail',
  templateUrl: './encounterdetail.html'
})

export class EncounterDetailComponent implements OnInit {
  private encounter:Encounter;
  private creatures: any;
  private selectedHeroes: Hero[];
  private selectedMonsters:Monster[];

  private sub: any;

  private isNew:boolean;
  private isVisible:boolean = true;

  constructor(private encounterService:EncounterService, private heroService:HeroService, private monsterService:MonsterService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let Id = +params['id']; // (+) converts string 'id' to a number
      this.isNew = isNaN(Id);

      if (!this.isNew) {
        this.encounterService.getEncounter(Id)
          .subscribe(encounter => {
            this.encounter = encounter;
            this.creatures = this.encounter.selectedHeroes.concat(this.encounter.selectedMonsters);
          });
      }
      else {
        this.encounter = {
          id: 0,
          encounterNaam: '',
          selectedHeroes: [],
          selectedMonsters:[]
        }
      }
    });
  }

  

  toggleVisibility(){
    this.isVisible = !this.isVisible;
  }

  removeFromEncounter(){}

  clearEncounter(){}
 
  

}
