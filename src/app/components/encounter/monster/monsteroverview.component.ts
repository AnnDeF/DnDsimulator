import { Component, OnInit } from '@angular/core';
import { Monster } from '../../../models/monster';
import { MonsterService } from '../../../services/monster.service';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'monsteroverview',
  templateUrl: './monsteroverview.html'
})
export class MonsteroverviewComponent implements OnInit {
  private monsters: Monster[];
  private selectedMonsters:Monster[] = [];
  private filteredMonsters: Monster[];
  private clickedMonsters:Monster[];

  private sorted: boolean = false;
  private _listFilter: string;
  
  constructor(private monsterService: MonsterService, private gameService:GameService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.monsterService.getMonsters().subscribe(monsters => {this.monsters = monsters; this.filteredMonsters = monsters});
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredMonsters = this.listFilter ? this.performFilter(this.listFilter) : this.monsters;
  }

  performFilter(filterBy: string): Monster[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.monsters.filter((monster: Monster) => monster.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

 
  addToEncounter(monster: Monster){
    this.gameService.addToEncounter(monster);
  }

  sortByHP() {
    this.sorted = !this.sorted;
    if (this.sorted) {
      this.monsters.sort(function (a: Monster, b: Monster) {
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
      this.monsters.sort(function (a: Monster, b: Monster) {
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
      this.monsters.sort(function (a: Monster, b: Monster) {
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
      this.monsters.sort(function (a: Monster, b: Monster) {
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
