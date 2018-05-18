import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes-overview',
  templateUrl: './heroes-overview.html'
})
export class HeroesOverviewComponent implements OnInit {
  private heroes: Hero[];
  private selectedHeroes: Hero[];
  private sorted: boolean = true;

  private _listFilter: string;
  private filteredHeroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.heroService.getHeroes().subscribe(heroes => {this.heroes = heroes; this.filteredHeroes = heroes});
  }

  addToEncounter(hero: Hero){
    this.selectedHeroes.push(hero);
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredHeroes = this.listFilter ? this.performFilter(this.listFilter) : this.heroes;
  }

  performFilter(filterBy: string): Hero[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.heroes.filter((hero: Hero) => hero.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
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
