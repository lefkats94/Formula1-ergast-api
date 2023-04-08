import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsListComponent } from './results-list/results-list.component';
import { ResultsDetailsComponent } from './results-details/results-details.component';


@NgModule({
  exports: [RouterModule]
})
export class ResultsRoutingModule { }