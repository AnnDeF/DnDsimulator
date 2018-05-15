import { Component, OnInit } from '@angular/core';
import { Creature } from '../../models/creature';


@Component({
  selector: 'encounterdetail',
  templateUrl: './encounterdetail.component.html'
})

export class EncounterDetailComponent implements OnInit {
  private creatures: Creature[];


  constructor() { }

  ngOnInit() {
  }

  removeFromEncounter(){}

 


}
