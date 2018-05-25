import { Component, OnInit } from '@angular/core';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'library',
  template: `<ul class="nav nav-tabs" role="tablist">
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" role="tab" routerLink="encounters" routerLinkActive="active">Encounters</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" role="tab" routerLink="heroes" routerLinkActive="active">Heroes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" role="tab" routerLink="monsters" routerLinkActive="active">Monsters</a>
  </li>
</ul>

<div class="tab-content" id="myTabContent">
  <div class="tab-pane active">
    <router-outlet></router-outlet>
  </div>
</div>`
})
export class LibraryComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

}
