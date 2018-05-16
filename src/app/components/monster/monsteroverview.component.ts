import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterService } from '../../services/monster.service';

@Component({
  selector: 'monsteroverview',
  templateUrl: './monsteroverview.html'
})
export class MonsteroverviewComponent implements OnInit {
private monsters: Monster[];

  constructor(private monsterService: MonsterService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.monsterService.getMonsters().subscribe(monsters => this.monsters = monsters);
  }
}
