import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Creature } from '../../models/creature';
import { Hero } from '../../models/hero';

@Component({
    selector: 'fight-toolbar',
    template: ` 
  <div class="btn-group d-flex justify-content-end">
        <form>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Attack</span>
                </div>
                <input required class="form-control" type="number" placeholder="0" name="damage" [(ngModel)]="damage">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" (click)="onHealthNegativeChanged()">Attack</button>
                </div>
            </div>
            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Heal</span>
                </div>
                <input required class="form-control" type="number" placeholder="0" name="heal" [(ngModel)]="heal">
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" (click)="onHealthPositiveChanged()">Heal</button>
                </div>
            </div>
        </form>
        <button *ngIf="creature.isMonster" (click)="toggleVisibility(creature)">
            <span class="fa" [ngClass]="{ 'fa-eye-slash': !creature.isVisible, 'fa-eye': creature.isVisible}"></span>
        </button>
        <button *ngIf="!creature.isMonster" (click)=removeFromFight(creature)>
            <span class="fa fa-trash"></span>
        </button>
    </div>
  `
})
export class FightToolbarComponent {
    @Input()
    public creature: Creature;

    public damage: number;
    public heal: number;

    @Output()
    public onSubmitHeal: EventEmitter<number> = new EventEmitter();
    @Output()
    public onSubmitDamage: EventEmitter<number> = new EventEmitter();
    @Output()
    public onClickToggleVisibility: EventEmitter<Creature> = new EventEmitter();
    @Output()
    public onClickRemoveFromFight: EventEmitter<Creature> = new EventEmitter();

    public onHealthNegativeChanged() {
        this.onSubmitDamage.emit(this.damage);
    }

    public onHealthPositiveChanged() {
        this.onSubmitHeal.emit(this.heal);
    }

    public toggleVisibility(creature:Creature) {
        this.onClickToggleVisibility.emit(creature);
    }

    public removeFromFight(creature:Creature) {
        this.onClickRemoveFromFight.emit(creature);
    }

}
