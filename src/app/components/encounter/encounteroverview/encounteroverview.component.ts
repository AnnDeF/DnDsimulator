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

  private filteredEncounters: Encounter[];

  constructor(
    private encounterService: EncounterService,
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.encounterService.getEncounters().subscribe(encounters => { this.encounters = encounters, this.filteredEncounters = encounters });
  }

  openEncounter(id: number) {
    this.gameService.openEncounter(id);
  }

  deleteEncounter(id: number) {
    this.encounterService.deleteEncounter(id).subscribe(() => {
      this.refresh();
    });
  }

  performFilter(filterBy: string): void {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      this.filteredEncounters = this.encounters.filter((encounter: Encounter) => encounter.encounterNaam.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filteredEncounters = this.encounters;
    }
  }

}
