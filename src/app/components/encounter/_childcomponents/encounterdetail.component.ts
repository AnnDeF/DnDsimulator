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

  private isNew: boolean;
  private isVisible: boolean = true;
  private showGame: boolean=false;

  constructor(
    private encounterService: EncounterService,
    private gameService: GameService
  ) { }

  ngOnInit() {
  }

  toggleVisibility(creature: any) {
    this.isVisible = !this.isVisible;
  }

  saveEncounter() {
    const encounter = {
      id: this._encounter.id,
      encounterNaam: this._encounter.encounterNaam,
      selectedHeroes: this._encounter.selectedHeroes,
      selectedMonsters: this._encounter.selectedMonsters
    }
    this.encounterService.updateEncounter(encounter).subscribe(encounter => this._encounter = encounter)
  }

  removeMonsterFromEncounter(monster:Monster) { 
    const idx = this._encounter.selectedMonsters.indexOf(monster);
    this._encounter.selectedMonsters.splice(idx,1)
  }

  removeHeroFromEncounter(hero:Hero){
    const idx = this._encounter.selectedHeroes.indexOf(hero);
    this._encounter.selectedHeroes.splice(idx,1)
  }

  clearEncounter(encounter) { 
    const encounterToUpdate= {
      id: this._encounter.id,
      encounterNaam: this._encounter.encounterNaam,
      selectedHeroes: [],
      selectedMonsters: []
  }
  this.encounterService.updateEncounter(encounterToUpdate).subscribe(encounter => { this._encounter = encounter });
}

  startGame(){
    this.showGame = !this.showGame;
  }

}
