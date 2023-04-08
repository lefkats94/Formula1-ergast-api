import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandingsInfoComponent } from './standings-info/standings-info.component';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StandingsInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
  ],
  exports:[
    StandingsInfoComponent
  ]
})
export class StandingsModule { }
