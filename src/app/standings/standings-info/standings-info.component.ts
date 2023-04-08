import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSelectionService } from 'src/app/shared/user-selection.service';
import { StandingsApiService } from '../standings-api.service';

@Component({
  selector: 'app-standings-info',
  templateUrl: './standings-info.component.html',
  styleUrls: ['./standings-info.component.css']
})
export class StandingsInfoComponent implements OnDestroy {

  selectedYear: number;
  selectedType: string;
  standingsData: any[];
  displayedColumns: any[];
  subscription: Subscription;

  constructor(private userSelection: UserSelectionService, private standingsService : StandingsApiService){
    this.subscription = this.userSelection.selectedYear$.subscribe((year) => {
      this.selectedYear = year;
      this.displayedColumns = this.standingsService.getDisplayedColumns(this.selectedType);
      this.onSelectedData();
    });

    this.subscription.add(this.userSelection.selectedType$.subscribe((type) => {
      this.selectedType = type;
      this.displayedColumns = this.standingsService.getDisplayedColumns(this.selectedType);
      this.onSelectedData();
    }));
  }

  onSelectedData(){
    this.displayedColumns = this.standingsService.getDisplayedColumns(this.selectedType);
      this.standingsService.getStandings(this.selectedType, this.selectedYear).subscribe(
        data => {
          this.standingsData = data;
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
