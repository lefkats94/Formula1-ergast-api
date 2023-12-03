import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSelectionService } from 'src/app/shared/user-selection.service';
import { TeamsApiService } from '../team-api.service';

@Component({
  selector: 'app-teams-cards',
  templateUrl: './teams-cards.component.html',
  styleUrls: ['./teams-cards.component.css']
})
export class TeamsCardsComponent implements OnDestroy {

  selectedYear: number;
  selectedType: string;
  teamsData: any[];
  subscription: Subscription;

  constructor(private userSelection: UserSelectionService, private teamsService : TeamsApiService){
    this.subscription = this.userSelection.selectedYear$.subscribe((year) => {
      this.selectedYear = year;
      this.onSelectedData();
    });

    this.subscription.add(this.userSelection.selectedType$.subscribe((type) => {
      this.selectedType = type;
      this.onSelectedData();
    }));
  }

  onSelectedData(){
      this.teamsService.getTeams(this.selectedType, this.selectedYear).subscribe(
        data => {
          this.teamsData = data;
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
