import { Component, Input } from '@angular/core';
import { Creature } from '../../models/creature';
import { Hero } from '../../models/hero';

@Component({
    selector: 'detail',
    template: ` 
  <form #form="ngForm" novalidate>
    <div class="form-group row">
        <label for="Naam" class="col-4 col-form-label"> Naam: </label>
        <div class="col-4">
            <input id="Naam" type="text" class="form-control" placeholder="Naam" name="naam" [(ngModel)]="creature.naam">
        </div>
    </div>

    <div class="form-group row">
        <label for="HP" class="col-4 col-form-label"> Hit Points: </label>
        <div class="col-2">
            <input id="HP" type="number" class="form-control" name="maxHP" [(ngModel)]="creature.maxHP">
        </div>
    </div>

    <div class="form-group row">
        <label for="AC" class="col-4 col-form-label"> Armor Class: </label>
        <div class="col-2">
            <input id="AC" type="number" class="form-control" name="AC" [(ngModel)]="creature.AC">
        </div>
    </div>

    <div class="form-group row">
        <label for="Init" class="col-4 col-form-label"> Initiatief modifier: </label>
        <div class="col-2">
            <input id="Init" type="number" class="form-control" name="init" [(ngModel)]="creature.init">
        </div>
    </div>
</form>
  `
})
export class DetailComponent {
    @Input()
    public creature: Creature;
}
