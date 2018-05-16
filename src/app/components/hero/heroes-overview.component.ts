import { Component, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'heroes-overview',
  templateUrl: './heroes-overview.html'
})
export class HeroesOverviewComponent implements OnInit {
private heroes: Hero[];

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
