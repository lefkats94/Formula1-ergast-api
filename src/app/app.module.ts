import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { StandingsModule } from './standings/standings.module';
import { TeamsModule } from './teams/teams.module';
import { CircuitsModule } from './circuits/circuits.module';
import { ResultsModule } from './results/results.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule, 
    StandingsModule,
    TeamsModule,
    CircuitsModule,
    ResultsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
