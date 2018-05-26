import { Component, OnInit } from '@angular/core';
import { Monster } from '../../../models/monster';
import { MonsterService } from '../../../services/monster.service';
import { GameService } from '../../../services/game.service';

@Component({
  selector: 'monsteroverview',
  template: `<div class="btn-toolbar justify-content-start" role="toolbar">
  <button type="button" class="btn btn-secondary" [routerLink]="['create']">
      Add hero
  </button>

  <filter (onChange)="performFilter($event)"></filter>

</div>
<list-overview [creatures]='filteredMonsters' 
              [creature]='monster' 
              (onClickSortByHP)='sortByHP()' 
              (onClickSortByAC)='sortByAC()' 
              (onClickAddCreature)='addToEncounter($event)' 
              (onClickDeleteCreature)='deleteMonster($event)'
              ></list-overview>
`
})
export class MonsteroverviewComponent implements OnInit {
  private monsters: Monster[];
  private sorted: boolean = false;

  private filteredMonsters: Monster[];

  constructor(private monsterService: MonsterService, private gameService: GameService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.monsterService.getMonsters().subscribe(monsters => { this.monsters = monsters; this.filteredMonsters = monsters });
  }

  public addToEncounter(monster: Monster): void {
    this.gameService.addMonster(monster)
  }

  public performFilter(filterBy: string): void {
    if (filterBy) {
      filterBy = filterBy.toLocaleLowerCase();
      this.filteredMonsters = this.monsters.filter((monster: Monster) => monster.naam.toLocaleLowerCase().indexOf(filterBy) !== -1);
    } else {
      this.filteredMonsters = this.monsters;
    }
  }

  public deleteMonster(id: number): void {
    this.monsterService.deleteMonster(id).subscribe(() => { this.refresh(); });
  }

  public sortByHP(): void {
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

  public sortByAC(): void {
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
