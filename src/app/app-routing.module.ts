import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StandingsInfoComponent } from './standings/standings-info/standings-info.component';
import { TeamsCardsComponent } from './teams/teams-cards/teams-cards.component';
import { ResultsListComponent } from './results/results-list/results-list.component';
import { ResultsDetailsComponent } from './results/results-details/results-details.component';
import { CircuitsInfoComponent } from './circuits/circuits-info/circuits-info.component';

const routes: Routes = [
  { path: '', component: StandingsInfoComponent},
  { path: 'standings', component: StandingsInfoComponent},
  { path: 'teams', component: TeamsCardsComponent},
  { path: 'results', component: ResultsListComponent},
  { path: 'results/:raceResults', component: ResultsDetailsComponent},
  { path: 'circuits', component: CircuitsInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
