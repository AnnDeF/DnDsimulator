import { Component, OnInit } from '@angular/core';
import { creature } from '../../models/creature';

@Component({
  selector: 'app-creatures-overview',
  templateUrl: './creatures-overview.component.html'
})
export class HeroesOverviewComponent implements OnInit {
private creatures: creature[];

  constructor() { }

  ngOnInit() {
  }

}
