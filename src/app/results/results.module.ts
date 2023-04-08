import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';
import { ResultsRoutingModule } from './results-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsDetailsComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule,
    SharedModule
  ],
  exports:[
    ResultsListComponent,
    ResultsDetailsComponent
  ]
})
export class ResultsModule { }
