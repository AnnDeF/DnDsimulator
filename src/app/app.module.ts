import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CreaturesData } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { CreatureDetailComponent } from './components/creature/creaturedetail.component';
import { CreatureService } from './services/creature.service';
import { CreaturesOverviewComponent } from './components/creature/creatures-overview.component';
import { EncounterDetailComponent } from './components/encounter/encounterdetail.component';
import { EncounteroverviewComponent } from './components/encounter/encounteroverview.component';


const appRoutes: Routes = [
  { path: 'creature/:id', component: CreatureDetailComponent },
  { path: 'encounter/:id', component: EncounterDetailComponent },
  { path: 'creatures', component: CreaturesOverviewComponent },
  { path: 'heroes', component: CreaturesOverviewComponent },
  { path: 'villains', component: CreaturesOverviewComponent },
  { path: 'encounters', component: EncounteroverviewComponent },
  // { path: 'about',            component: AboutChildRouteComponent,
  //   children: [
  //     { path: 'figure/:id',   component: FigureDetailContainerComponent }
  //   ]},
];

@NgModule({
  declarations: [
    AppComponent,
    CreatureDetailComponent,
    CreaturesOverviewComponent,
    EncounterDetailComponent,
    EncounteroverviewComponent
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
  providers: [CreatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
