import { Component, OnInit } from '@angular/core';
import { Creature } from '../../models/creature';
import { CreatureService } from '../../services/creature.service';

@Component({
  selector: 'creatures-overview',
  templateUrl: './creatures-overview.component.html'
})
export class CreaturesOverviewComponent implements OnInit {
private creatures: Creature[];

  constructor(private creatureService:CreatureService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.creatureService.getCreatures().subscribe(creatures => this.creatures = creatures);
  }

  summonHeroes(){
    this.creatures.filter(creature => creature.isHero === true);
  }

  summonVillains(){
    this.creatures.filter(creature => creature.isHero === false);
  }
}
