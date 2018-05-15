import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Creature } from '../../models/creature';
import { CreatureService } from '../../services/creature.service';
import { switchMap } from 'rxjs/operators'


@Component({
    selector: 'creature',
    templateUrl: './creaturedetail.component.html'
})
export class CreatureDetailComponent implements OnInit {
    private creature: Creature;

    constructor(private creatureService: CreatureService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: ParamMap) => this.creatureService.getCreature(+params.get('id'))))
            .subscribe(creature => this.creature = creature);
    }

   // switchMap is usually used when you have some async operation that is triggered by some prepended "event/stream". The difference to e.g. flatMap or concatMap is,
   // that as soon as the next trigger emits, the current async operation is canceled and retriggered.   In your case this means, that as soon as the route-params
   // change, your hero-service is automatically called again with the changed params and the previouse call is canceled so you won't receive outdated data.


    Heal(heal: number) {
        var newHP = this.creature.battleHP + heal;

        if (this.creature.battleHP > this.creature.maxHP) {
            return this.creature.maxHP;
        }
        else return newHP;
    };

    doDamage(damage: number) {
        var newHP = this.creature.battleHP - damage;
        if (newHP <= 0) {
            return 0;
        }
        else {
            return newHP;
        }
    };

}
