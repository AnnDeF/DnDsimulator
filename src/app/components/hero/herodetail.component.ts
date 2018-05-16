import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Creature } from '../../models/creature';
import { switchMap } from 'rxjs/operators'
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';


@Component({
    selector: 'hero',
    templateUrl: './herodetail.html'
})
export class HeroDetailComponent implements OnInit {
    private hero: Hero;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params
            .pipe(switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id'))))
            .subscribe(hero => this.hero = hero);
    }

   // switchMap is usually used when you have some async operation that is triggered by some prepended "event/stream". The difference to e.g. flatMap or concatMap is,
   // that as soon as the next trigger emits, the current async operation is canceled and retriggered.   In your case this means, that as soon as the route-params
   // change, your hero-service is automatically called again with the changed params and the previouse call is canceled so you won't receive outdated data.


    Heal(heal: number) {
        var newHP = this.hero.battleHP + heal;

        if (newHP > this.hero.maxHP) {
            return this.hero.maxHP;
        }
        else return newHP;
    };

    doDamage(damage: number) {
        var newHP = this.hero.battleHP - damage;
        if (newHP <= 0) {
            return 0;
        }
        else {
            return newHP;
        }
    };

}
