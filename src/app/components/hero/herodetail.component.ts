import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';


@Component({
    selector: 'hero',
    templateUrl: './herodetail.html'
})
export class HeroDetailComponent implements OnInit {
    private hero: Hero;
    private isNew:boolean;
    private sub:any;

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            let Id = +params['id']; // (+) converts string 'id' to a number
            this.isNew = isNaN(Id);

            // if (!this.isNew) {
                this.heroService.getHero(Id)
                    .subscribe(hero => 
                        this.hero = hero );
            // }
            // else {
            //     this.hero = {
            //         id:0,
            //         naam: '',
            //         maxHP:0,
            //         battleHP:0,
            //         AC:0,
            //         Init:0
            //     }
            // }
        });
    }

    addHero() { }

    saveHero() { }

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
