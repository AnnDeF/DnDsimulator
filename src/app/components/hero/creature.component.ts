import { Component, OnInit } from '@angular/core';
import { creature } from '../../models/creature';


@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html'
})
export class CreatureComponent implements OnInit {
  private creature:creature;

  constructor() { }

  ngOnInit() {
  }

  Heal(heal: number) {
    var newHP = this.creature.HP + heal;

    if (this.creature.HP > newHP) {
        return this.creature.HP;
    }
    else return newHP;
};

doDamage(damage: number) {
    var newHP = this.creature.HP - damage;
    if (newHP <= 0) {
        return 0;
    }
    else {
        return newHP;
    }
};

}
