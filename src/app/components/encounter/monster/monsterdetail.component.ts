import { Component, OnInit } from '@angular/core';
import { Monster } from '../../../models/monster';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { MonsterService } from '../../../services/monster.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'monster',
  templateUrl: './monsterdetail.html'
})
export class MonsterDetailComponent implements OnInit {
  private monster: any;
  private monsters: Monster[];
  private sub: any;
  private isNew: boolean;

  constructor(private monsterService: MonsterService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.sub = this.route.params.subscribe(params => {
      let Id = +params['id']; // (+) converts string 'id' to a number
      this.isNew = isNaN(Id);

      if (!this.isNew) {
        this.monsterService.getMonster(Id)
          .subscribe(monster =>
            this.monster = monster);
      }
      else {
        this.monster = {
          id: 0,
          naam: '',
          maxHP: 0,
          battleHP: 0,
          AC: 0,
          init: 0
        }
      }
    });
  }

  return(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  addMonster() {
    const newMonster = {
      id: null,
      naam: this.monster.naam,
      maxHP: this.monster.maxHP,
      battleHP: this.monster.maxHP,
      AC: this.monster.AC,
      init: this.monster.init
    }
    this.monsterService.addMonster(newMonster).subscribe(monster => { this.monster = monster, this.return() });
  }

  updateMonster() {
    const monster = {
      id: this.monster.id,
      naam: this.monster.naam,
      maxHP: this.monster.maxHP,
      battleHP: this.monster.maxHP,
      AC: this.monster.AC,
      init: this.monster.init
    }
    this.monsterService.updateMonster(monster).subscribe(monster => { this.monster = monster, this.return() });
  }

}
