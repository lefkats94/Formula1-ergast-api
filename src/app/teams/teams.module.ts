import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TeamsCardsComponent } from './teams-cards/teams-cards.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TeamsCardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    TeamsCardsComponent
  ]
})
export class TeamsModule { }
