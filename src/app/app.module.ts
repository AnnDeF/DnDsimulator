import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { CreaturesData } from './services/in-memory-data.service';

import { LibraryComponent } from './components/library/library.component';

import { EncounterDetailComponent } from './components/encounter/encounterdetail.component';
import { EncounteroverviewComponent } from './components/encounter/encounteroverview.component';

import { HeroDetailComponent } from './components/hero/herodetail.component';
import { HeroesOverviewComponent } from './components/hero/heroes-overview.component';

import { MonsteroverviewComponent } from './components/monster/monsteroverview.component';
import { MonsterDetailComponent } from './components/monster/monsterdetail.component';

import { HomeComponent } from './components/home/home.component';
import { GameComponent } from './components/game/game.component';

import { HeroService } from './services/hero.service';
import { MonsterService } from './services/monster.service';
import { EncounterService } from './services/encounter.service';
import { GameService } from './services/game.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'game',
    component: GameComponent,
    children: [
      { path: 'heroes/:id', component: HeroDetailComponent },
      { path: 'monsters/:id', component: MonsterDetailComponent },
      { path: 'heroes/:id/edit', component: HeroDetailComponent },
      { path: 'monsters/:id/edit', component: MonsterDetailComponent },
      { path: 'heroes', component: HeroesOverviewComponent },
      { path: 'monsters', component: MonsteroverviewComponent },
      { path: 'encounters', component: EncounteroverviewComponent },
      { path: ':id', component: EncounterDetailComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesOverviewComponent,
    EncounterDetailComponent,
    EncounteroverviewComponent,
    MonsterDetailComponent,
    MonsteroverviewComponent,
    LibraryComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      CreaturesData, { dataEncapsulation: false }
    ),
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [HeroService, MonsterService, EncounterService, GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
