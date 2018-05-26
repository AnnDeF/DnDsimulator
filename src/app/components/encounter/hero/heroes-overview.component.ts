import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { GameService } from '../../../services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-overview',
  template: `<div class="btn-toolbar justify-content-start" role="toolbar">
  <button type="button" class="btn btn-secondary" [routerLink]="['create']">
      Add hero
  </button>

  <filter (onChange)="performFilter($event)"></filter>

</div>
<list-overview [creatures]='filteredHeroes' 
              [creature]='hero' 
              (onClickSortByHP)='sortByHP()' 
              (onClickSortByAC)='sortByAC()' 
              (onClickAddCreature)='addToEncounter($event)' 
              (onClickDeleteCreature)='deleteHero($event)'
              ></list-overview>
`
})

export class HeroesOverviewComponent implements OnInit {
  private heroes: Hero[];
  private sorted: boolean = true;

  private filteredHeroes: Hero[] = [];

  constructor(private heroService: HeroService, private gameService: GameService, private router: Router) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.heroService.getHeroes().subscribe(heroes => { this.heroes = heroes; this.filteredHeroes = heroes });
  }

  public addToEncounter(hero: Hero): void {
    this.gameService.addHero(hero);
  }

  public deleteHero(id: number): void {
    this.heroService.deleteHero(id).subscribe(() => { this.refresh(); });
  }

  public performFilter(filterBy: string): void {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      this.filteredHeroes = this.heroes.filter((hero: Hero) => hero.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filteredHeroes = this.heroes;
    }
  }

  public sortByHP(): void {
    this.sorted = !this.sorted;
    if (this.sorted) {
      this.heroes.sort(function (a: Hero, b: Hero) {
        if (a.maxHP < b.maxHP) {
          return 1;
        }
        if (a.maxHP > b.maxHP) {
          return -1;
        }
        return 0;
      });
    }
    else {
      this.heroes.sort(function (a: Hero, b: Hero) {
        if (a.maxHP < b.maxHP) {
          return -1;
        }
        if (a.maxHP > b.maxHP) {
          return 1;
        }
        return 0;
      });
    }
  }

  public sortByAC(): void {
    this.sorted = !this.sorted;
    if (this.sorted) {
      this.heroes.sort(function (a: Hero, b: Hero) {
        if (a.AC < b.AC) {
          return 1;
        }
        if (a.AC > b.AC) {
          return -1;
        }
        return 0;
      });
    }
    else {
      this.heroes.sort(function (a: Hero, b: Hero) {
        if (a.AC < b.AC) {
          return -1;
        }
        if (a.AC > b.AC) {
          return 1;
        }
        return 0;
      });
    }
  }

}
