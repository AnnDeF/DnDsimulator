import { Component, OnInit } from '@angular/core';
import { Monster } from '../../models/monster';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { MonsterService } from '../../services/monster.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'monster',
  templateUrl: './monsterdetail.html'
})
export class MonsterDetailComponent implements OnInit {
  private monster: Monster;
  private sub: any;
  private isNew:boolean;

  constructor(private monsterService: MonsterService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let Id = +params['id']; // (+) converts string 'id' to a number
      this.isNew = isNaN(Id);

      // if (!this.isNew) {
          this.monsterService.getMonster(Id)
              .subscribe(monster => 
                  this.monster = monster );
      // }
      // else {
      //     this.hero = {
      //         id:0,
      //         naam: '',
      //         maxHP:0,
      //         battleHP:0,
      //         AC:0,
      //         Init:0
      //     }
      // }
  });
  }

  addMonster() { }

  saveMonster() { }

}
