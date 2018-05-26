import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Creature } from '../../models/creature';

@Component({
    selector: 'list-overview',
    template: `
  <table class="table table-striped table-dark table-hover" *ngIf="creatures">
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
          <button type="button" class="btn btn-secondary btn-sm" (click)="deleteCreature(creature.id)">
                <span class="fa fa-trash"></span>
            </button>
            <button class="btn btn-secondary btn-sm" [routerLink]="[creature.id, 'edit']">
            <span class="fa fa-pencil-square-o"></span>
            </button>
            <button class="btn btn-secondary btn-sm" (click)="addCreature(creature)">
            <span class="fa fa-plus-square"></span> Voeg toe
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

    @Input()
    public creatures: Creature;


    @Output()
    public onClickAddCreature: EventEmitter<Creature> = new EventEmitter();
    @Output()
    public onClickDeleteCreature: EventEmitter<number> = new EventEmitter();
    @Output()
    public onClickSortByHP: EventEmitter<void> = new EventEmitter();
    @Output()
    public onClickSortByAC: EventEmitter<void> = new EventEmitter();

    public deleteCreature(id: number): void {
        this.onClickDeleteCreature.emit(id);
    }

    public addCreature(creature: Creature): void {
        this.onClickAddCreature.emit(creature);
    }

    public sortByHP(): void {
        this.onClickSortByHP.emit();
    }

    public sortByAC(): void {
        this.onClickSortByAC.emit();
    }

}
