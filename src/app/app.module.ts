import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CreaturesData } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { EncounterDetailComponent } from './components/encounter/encounterdetail.component';
import { EncounteroverviewComponent } from './components/encounter/encounteroverview.component';
import { HeroDetailComponent } from './components/hero/herodetail.component';
import { HeroesOverviewComponent } from './components/hero/heroes-overview.component';
import { HeroService } from './services/hero.service';
import { MonsteroverviewComponent } from './components/monster/monsteroverview.component';
import { MonsterDetailComponent } from './components/monster/monsterdetail.component';
import { MonsterService } from './services/monster.service';



const appRoutes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'encounter/:id', component: EncounterDetailComponent },
  { path: 'heroes', component: HeroesOverviewComponent },
  { path: 'monsters', component: MonsteroverviewComponent },
  { path: 'encounters', component: EncounteroverviewComponent },
  // { path: 'about',            component: AboutChildRouteComponent,
  //   children: [
  //     { path: 'figure/:id',   component: FigureDetailContainerComponent }
  //   ]},
];

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesOverviewComponent,
    EncounterDetailComponent,
    EncounteroverviewComponent,
    MonsterDetailComponent,
    MonsteroverviewComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      CreaturesData, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [HeroService, MonsterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
