import { Component, Input } from '@angular/core';
import { Creature } from '../../models/creature';
import { Hero } from '../../models/hero';

@Component({
  selector: 'detail',
  template: ` 
  <form #form="ngForm" class="d-flex flex-column" novalidate>

        <div class="form-group d-flex justify-content-start">
            <label for="Naam" class="col-form-label w-25"> Naam: </label>
            <input id="Naam" type="text" class="form-control w-25" placeholder="Naam" name="naam" [(ngModel)]="creature.naam">
        </div>

        <div class="form-group d-flex justify-content-start">
            <label for="HP" class="col-form-label w-25"> Hit Points: </label>
            <input id="HP" type="number" class="form-control w-25" name="maxHP" [(ngModel)]="creature.maxHP">
        </div>

        <div class="form-group d-flex justify-content-start">
            <label for="AC" class="col-form-label w-25"> Armor Class: </label>
            <input id="AC" type="number" class="form-control w-25" name="AC" [(ngModel)]="creature.AC">
        </div>

        <div class="form-group d-flex justify-content-start">
            <label for="Init" class="col-form-label w-25"> Initiatief modifier: </label>
            <input id="Init" type="number" class="form-control w-25" name="init" [(ngModel)]="creature.init">
        </div>
    </form>
  `
})
export class DetailComponent  {
    @Input()
    public creature: Creature;
}
