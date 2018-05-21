import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'hero',
    templateUrl: './herodetail.html'
})
export class HeroDetailComponent implements OnInit {
    private hero: any;
    private heroes: Hero[];
    private isNew: boolean;
    private sub: any;

    constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.sub = this.route.params.subscribe(params => {
            let Id = +params['id']; // (+) converts string 'id' to a number
            this.isNew = isNaN(Id);

            if (!this.isNew) {
                this.heroService.getHero(Id)
                    .subscribe(hero =>
                        this.hero = hero);
            }
            else {
                this.hero = {
                    id: 0,
                    naam: '',
                    maxHP: 0,
                    battleHP: 0,
                    AC: 0,
                    init: 0
                }
            }
        });
    }

    return(): void {
        this.router.navigate(['../'], { relativeTo: this.route });

    }

    addHero() {
        const newHero = {
            id: null,
            naam: this.hero.naam,
            maxHP: this.hero.maxHP,
            battleHP: this.hero.maxHP,
            AC: this.hero.AC,
            init: this.hero.init
        }
        this.heroService.addHero(newHero).subscribe(hero => { this.hero = hero, this.return() });
    }


    updateHero() {
        const hero = {
            id: this.hero.id,
            naam: this.hero.naam,
            maxHP: this.hero.maxHP,
            battleHP: this.hero.maxHP,
            AC: this.hero.AC,
            init: this.hero.init
        }
        this.heroService.updateHero(hero).subscribe(hero => { this.hero = hero, this.return() });
    }



}
