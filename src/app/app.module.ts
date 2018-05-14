import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { EncounterComponent } from './components/encounter/encounter.component';
import { CreatureComponent } from './components/hero/creature.component';
import { CreatureService } from './services/creature.service';



@NgModule({
  declarations: [
    AppComponent,
    CreatureComponent,
    EncounterComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    FormsModule
  ],
  providers: [CreatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
