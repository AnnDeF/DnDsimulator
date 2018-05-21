import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { EncounterService } from '../../../services/encounter.service';
import { GameService } from '../../../services/game.service';
import { Creature } from '../../../models/creature';
import { Encounter } from '../../../models/encounter';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'fight',
  templateUrl: './fight.component.html'
})

export class FightComponent implements OnInit {
  private initiativeNumbers:number[];
  private encounter:Encounter;
  private creatures:Creature[];
  private sub:any;

  constructor(private encounterService: EncounterService, private gameService:GameService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let Id = +params['id']; // (+) converts string 'id' to a number

      this.encounterService.getEncounter(Id)
        .subscribe(encounter => {
          this.encounter = encounter,
          this.creatures = this.encounter.selectedHeroes.concat(this.encounter.selectedMonsters);
        });
    });
   
    this.decideInitiative();
  }

  decideInitiative(): Number[]{
    for (let i = 0; i<this.creatures.length; i++){
      this.initiativeNumbers.push(this.gameService.rollInitiative());
      }
      return this.initiativeNumbers;
    }

    sortByInitiative(){
      let newValues=[];
     for(let i=0; i<this.creatures.length; i++){
       newValues.push(this.creatures[i].Init + this.initiativeNumbers[i]);
     }
    }

}
