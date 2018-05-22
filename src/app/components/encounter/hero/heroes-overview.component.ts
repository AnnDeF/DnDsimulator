import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../models/hero';
import { HeroService } from '../../../services/hero.service';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'heroes-overview',
  templateUrl: './heroes-overview.html'
})
export class HeroesOverviewComponent implements OnInit {
  private heroes: Hero[];
  private sorted: boolean = true;

  private filteredHeroes: Hero[] = [];

  constructor(private heroService: HeroService, private gameService:GameService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.heroService.getHeroes().subscribe(heroes => {this.heroes = heroes; this.filteredHeroes = heroes});
  }

  addToEncounter(hero: Hero){
    this.gameService.addHero(hero);
  }

  performFilter(filterBy: string): void {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      this.filteredHeroes = this.heroes.filter((hero: Hero) => hero.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filteredHeroes = this.heroes;
    }
  }

  sortByHP() {
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

  sortByAC() {
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
