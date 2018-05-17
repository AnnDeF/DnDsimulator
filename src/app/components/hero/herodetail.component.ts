import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';
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

    constructor(private heroService: HeroService, private route: ActivatedRoute) { }

    ngOnInit() {
       this.refresh();
    }

   refresh(){
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
                Init: 0
            }
        }
    });
   }

   getHeroes(){
       this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
   }

    addHero() {
       const newHero={
           id: null,
           naam: this.hero.naam,
           maxHP: this.hero.maxHP,
           battleHP: this.hero.maxHP,
           AC: this.hero.AC,
           Init: this.hero.Init
       }
       this.heroService.updateHero(newHero).subscribe(hero => {this.hero = hero, this.getHeroes()});
     }


    updateHero() {
        const hero = {
            id: this.hero.id,
            naam: this.hero.naam,
            maxHP: this.hero.maxHP,
            battleHP: this.hero.maxHP,
            AC: this.hero.AC,
            Init: this.hero.Init
        }
        this.heroService.updateHero(hero).subscribe(hero => {this.hero = hero, this.getHeroes()});
     }


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
