import { Component, OnInit } from '@angular/core';
import { creature } from '../../models/creature';


@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html'
})

export class EncounterComponent implements OnInit {
  private creatures: creature[];


  constructor() { }

  ngOnInit() {
  }

  removeFromEncounter(){}

}
