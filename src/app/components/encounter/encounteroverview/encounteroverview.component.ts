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

  public refresh(): void {
    this.encounterService.getEncounters().subscribe(encounters => { this.encounters = encounters, this.filteredEncounters = encounters });
  }

  public openEncounter(id: number): void {
    this.gameService.openEncounter(id);
  }

  public deleteEncounter(id: number): void {
    this.encounterService.deleteEncounter(id).subscribe(() => {
      this.refresh();
    });
  }

  public performFilter(filterBy: string): void {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      this.filteredEncounters = this.encounters.filter((encounter: Encounter) => encounter.encounterNaam.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filteredEncounters = this.encounters;
    }
  }

}
