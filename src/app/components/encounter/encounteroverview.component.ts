import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../models/encounter';
import { EncounterService } from '../../services/encounter.service';

@Component({
  selector: 'encounteroverview',
  templateUrl: './encounteroverview.html'
})
export class EncounteroverviewComponent implements OnInit {
private encounters: Encounter[];


  constructor(private encounterService:EncounterService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.encounterService.getEncounters().subscribe(encounters => this.encounters = encounters);
  }

  deleteEncounter(id:number){
    this.encounterService.deleteEncounter(id).subscribe();
  };


}
