import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Creature } from '../../models/creature';

@Component({
  selector: 'list-overview',
  template: `
  <table class="table table-striped table-dark table-hover" *ngIf="filteredMonsters">
  <thead class="thead-dark">
      <tr>
          <th scope="col">Naam</th>
          <th scope="col"><a (click)="sortByHP()">Hit Points</a></th>
          <th scope="col"><a (click)="sortByAC()">Armor Class</a></th>
      </tr>
  </thead>
  <tbody>
      <tr *ngFor="let creature of creatures">
          <td>
              <a [routerLink]="[creature.id]">{{creature.naam}}</a>
          </td>
          <td>{{creature.maxHP}}</td>
          <td>{{creature.AC}}</td>
          <td>
            <button class="btn btn-secondary btn-sm" [routerLink]="[creature.id, 'edit']">
                Wijzig
            </button>
            <button class="btn btn-secondary btn-sm" (click)="addCreature(creature)">
                Voeg toe
            </button>
          </td>
      </tr>
  </tbody>
</table>
  ` 
})
export class ListOverviewComponent {
    @Input()
    public creature: Creature;

    @Output()
    public onClick: EventEmitter<Creature> = new EventEmitter();

    public addCreature(creature){
        this.onClick.emit(creature)
    }

}
