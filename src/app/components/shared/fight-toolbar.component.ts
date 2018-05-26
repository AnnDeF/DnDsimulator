import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Creature } from '../../models/creature';
import { Hero } from '../../models/hero';

@Component({
    selector: 'fight-toolbar',
    template: ` 
  <div class="btn-group d-flex justify-content-end">
        <form class="form-group">
            <select  *ngIf="!creature.isMonster" class="form-control" name="naam" [(ngModel)]="creature.id">
                <option *ngFor="let monster of monstersAliveAndVisible" [value]="monster.id">{{monster.naam}}</option>
            </select>

            <select *ngIf="creature.isMonster" class="form-control" name="naam" [(ngModel)]="creature.naam">
            <option *ngFor="let creature of heroesAlive" [value]="creature.id">{{creature.naam}}</option>
            </select>

            <div class="input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Attack</span>
                </div>
                <input required class="form-control" type="number" placeholder="0" name="damage" [(ngModel)]="damage">
                <div class="input-group-append">
                    <button class="btn btn-defaulty" type="button" (click)="onHealthNegativeChanged()">Attack</button>
                </div>
            </div>

            <div class="input-group" *ngIf="!creature.isMonster">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">Heal</span>
                </div>
                <input required class="form-control" type="number" placeholder="0" name="heal" [(ngModel)]="heal">
                <div class="input-group-append">
                    <button class="btn btn-default" type="button" (click)="onHealthPositiveChanged()">Heal</button>
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
    @Input()
    public heroesAlive: Creature[];
    @Input()
    public monstersAliveAndVisible: Creature[];

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

    public onHealthNegativeChanged():void {
        this.onSubmitDamage.emit(this.damage);
    }

    public onHealthPositiveChanged():void {
        this.onSubmitHeal.emit(this.heal);
    }

    public toggleVisibility(creature:Creature):void {
        this.onClickToggleVisibility.emit(creature);
    }

    public removeFromFight(creature:Creature) {
        this.onClickRemoveFromFight.emit(creature);
    }

}
