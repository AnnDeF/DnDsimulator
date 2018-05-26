import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Creature } from '../../models/creature';
import { Hero } from '../../models/hero';

@Component({
    selector: 'fight-toolbar',
    template: ` 
    <form class="form-inline">
        <select class="form-control mb-2 mr-sm-2" name="naam" [(ngModel)]="selectedCreatureId">
            <option *ngFor="let c of creatures" [value]="c.id">{{c.naam}}</option>
        </select>

        <div class="input-group mb-2 mr-sm-2">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Attack</span>
            </div>
            <input required class="form-control" type="number" placeholder="0" name="damage" [(ngModel)]="damage">
            <div class="input-group-append">
                <button class="btn btn-defaulty" type="button" (click)="onHealthNegativeChanged()">Attack</button>
            </div>
        </div>

        <div class="input-group mb-2" *ngIf="!creature.isMonster">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">Heal</span>
            </div>
            <input required class="form-control" type="number" placeholder="0" name="heal" [(ngModel)]="heal">
            <div class="input-group-append">
                <button class="btn btn-default" type="button" (click)="onHealthPositiveChanged()">Heal</button>
            </div>
        </div>
    </form>
`
})
export class FightToolbarComponent {
    @Input()
    public creature: Creature;
    @Input()
    public creatures: Creature[];

    public selectedCreatureId: number;
    public damage: number;
    public heal: number;

    @Output()
    public onSubmitHeal: EventEmitter<object> = new EventEmitter();
    @Output()
    public onSubmitDamage: EventEmitter<object> = new EventEmitter();
    @Output()
    public onClickToggleVisibility: EventEmitter<Creature> = new EventEmitter();
    @Output()
    public onClickRemoveFromFight: EventEmitter<Creature> = new EventEmitter();

    public onHealthNegativeChanged(): void {
        this.onSubmitDamage.emit({ amount: this.damage, target: this.selectedCreatureId });
    }

    public onHealthPositiveChanged(): void {
        this.onSubmitHeal.emit({ amount: this.heal, target: this.selectedCreatureId });
    }

    public toggleVisibility(creature: Creature): void {
        this.onClickToggleVisibility.emit(creature);
    }

    public removeFromFight(creature: Creature) {
        this.onClickRemoveFromFight.emit(creature);
    }

}
