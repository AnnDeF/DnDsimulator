import { Component, OnInit } from '@angular/core';
import { Encounter } from '../../models/encounter';


@Component({
  selector: 'encounterdetail',
  templateUrl: './encounterdetail.html'
})

export class EncounterDetailComponent implements OnInit {
  private encounter:Encounter;
  private isVisible:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility(){
    this.isVisible = !this.isVisible;
  }

  removeFromEncounter(){}

  clearEncounter(){}
 
  

}
