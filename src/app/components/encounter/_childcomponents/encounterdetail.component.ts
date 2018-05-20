import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Encounter } from '../../../models/encounter';
import { EncounterService } from '../../../services/encounter.service';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../../../services/game.service';
import { Creature } from '../../../models/creature';


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
    const newEncounter = {
      id: null,
      encounterNaam: this._encounter.encounterNaam,
      selectedHeroes: this._encounter.selectedHeroes,
      selectedMonsters: this._encounter.selectedMonsters
    }
    this.encounterService.addEncounter(newEncounter).subscribe(encounter => this._encounter = newEncounter)
  }

  removeFromEncounter() { }

  clearEncounter(encounter) { 
    const encounterToUpdate= {
      id: this._encounter.id,
      encounterNaam: this._encounter.encounterNaam,
      selectedHeroes: [],
      selectedMonsters: []
  }
  this.encounterService.updateEncounter(encounter).subscribe(encounter => { this._encounter = encounter });
}

}
