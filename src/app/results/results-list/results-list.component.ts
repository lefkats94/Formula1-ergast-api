import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSelectionService } from 'src/app/shared/user-selection.service';
import { ResultsApiService } from '../results-api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnDestroy {
  
  selectedYear: number;
  resultsListData: any[];
  displayedColumns: any[];
  subscription: Subscription;

  constructor(private userSelection: UserSelectionService, private resultService : ResultsApiService){
    this.subscription = this.userSelection.selectedYear$.subscribe((year) => {
      this.selectedYear = year;
      this.displayedColumns = ['round','name','wikipedia', 'results'];
      this.onSelectedData();
    });
  }

  onSelectedData(){
      this.resultService.getResultsList(this.selectedYear).subscribe(
        data => {
          this.resultsListData = data;
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
