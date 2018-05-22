import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../../models/encounter';
import { EncounterService } from '../../../services/encounter.service';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'encounteroverview',
  templateUrl: './encounteroverview.html'
})
export class EncounteroverviewComponent implements OnInit {
  private encounters: Encounter[];

  constructor(
    private encounterService: EncounterService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.encounterService.getEncounters().subscribe(encounters => this.encounters = encounters);
  }

  openEncounter(id: number) {
    this.gameService.openEncounter(id);
  }

  deleteEncounter(id: number) {
    this.encounterService.deleteEncounter(id).subscribe();
  }


}
