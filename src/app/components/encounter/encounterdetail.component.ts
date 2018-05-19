import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Encounter } from '../../models/encounter';
import { EncounterService } from '../../services/encounter.service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../services/game.service';
import { Creature } from '../../models/creature';


@Component({
  selector: 'encounterdetail',
  templateUrl: './encounterdetail.html'
})

export class EncounterDetailComponent implements OnInit {
  @Output()
  change: EventEmitter<Creature> = new EventEmitter<Creature>();

  private encounter:Encounter;
  private creatures: any;

  private sub: any;

  private isNew:boolean;
  private isVisible:boolean = true;

  constructor(private encounterService:EncounterService, private route:ActivatedRoute, private gameService:GameService) { }

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


  toggleVisibility(creature: any){
    this.isVisible = !this.isVisible;
  }

  removeFromEncounter(){}

  clearEncounter(){}
 
  

}
