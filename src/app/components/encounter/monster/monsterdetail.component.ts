import { Component, OnInit } from '@angular/core';
import { Monster } from '../../../models/monster';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { MonsterService } from '../../../services/monster.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'monster',
  template: `<div *ngIf="monster" class="container">
  <div class="row">
      <div class="col-4"></div>
      <div class="col-6">
          <h3>{{monster.naam}}</h3>
      </div>
  </div>

  <detail [creature]="monster"></detail>

  <div class="row">
      <div class="col-4"></div>
      <div class="col-6">
  
      <btn-save *ngIf="isNew" (onClick)="addMonster()" title="Monster opslaan"></btn-save>
      <btn-save *ngIf="!isNew" (onClick)="updateMonster()"></btn-save>
    </div>
  </div>
</div>`
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
          init: 0,
          isVisible: true,
          isMonster: true
        };
      }
    });
  }

  return(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  public addMonster(): void {
    const newMonster = {
      id: null,
      naam: this.monster.naam,
      maxHP: this.monster.maxHP,
      battleHP: this.monster.maxHP,
      AC: this.monster.AC,
      init: this.monster.init,
      isVisible: true,
      isMonster: true
    }
    this.monsterService.addMonster(newMonster).subscribe(monster => { this.monster = monster, this.return() });
  }

  public updateMonster(): void {
    const monster = {
      id: this.monster.id,
      naam: this.monster.naam,
      maxHP: this.monster.maxHP,
      battleHP: this.monster.maxHP,
      AC: this.monster.AC,
      init: this.monster.init,
      isVisible: true,
      isMonster: true
    }
    this.monsterService.updateMonster(monster).subscribe(monster => { this.monster = monster, this.return() });
  }

}
