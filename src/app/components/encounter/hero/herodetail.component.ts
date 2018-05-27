import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'hero',
    template: `<div *ngIf="hero" class="container">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-6">
            <h3 class="heroNaam mt-3">{{hero.naam}}</h3>
        </div>
    </div>

    <detail [creature]="hero"></detail>

    <div class="row">
        <div class="col-4"></div>
        <div class="col-6">
            <btn-save *ngIf="isNew" (onClick)="addHero()"  title="Hero opslaan"></btn-save>
            <btn-save *ngIf="!isNew" (onClick)="updateHero()"></btn-save>
        </div>
    </div>
</div>` ,
  styles:['.heroNaam{ color: rgb(33, 37, 41); font-family: serif; text-shadow: 0 0 3px red, 0 0 5px #d91f26, 0 0 2px #FF0000, 0 0 5px #d91f26; text-decoration: underline; text-decoration-line: underline overline; }']
})
export class HeroDetailComponent implements OnInit {
    private hero: any;
    private heroes: Hero[];
    private isNew: boolean;
    private sub: any;
    public saveText = 'Hero opslaan';

    constructor(private heroService: HeroService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit() {
        this.refresh();
    }

    public refresh():void {
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
                    init: 0,
                    isMonster:false
                }
            }
        });
    }

    public return(): void {
        this.router.navigate(['../'], { relativeTo: this.route });

    }

    public addHero():void {
        const newHero = {
            id: null,
            naam: this.hero.naam,
            maxHP: this.hero.maxHP,
            battleHP: this.hero.maxHP,
            AC: this.hero.AC,
            init: this.hero.init,
            isMonster:this.hero.false
        }
        this.heroService.addHero(newHero).subscribe(hero => { this.hero = hero, this.return() });
    }


    public updateHero():void {
        const hero = {
            id: this.hero.id,
            naam: this.hero.naam,
            maxHP: this.hero.maxHP,
            battleHP: this.hero.maxHP,
            AC: this.hero.AC,
            init: this.hero.init,
            isMonster: this.hero.false
        }
        this.heroService.updateHero(hero).subscribe(hero => { this.hero = hero, this.return() });
    }
}
