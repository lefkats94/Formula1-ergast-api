import { Component, OnInit } from '@angular/core';
import { ResultsApiService } from '../results-api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  
  selectedYear: number;
  resultsListData: any[];
  displayedColumns: any[];

  constructor(private resultService : ResultsApiService){}

  ngOnInit(): void {
    this.selectedYear = 2023;
    this.displayedColumns = ['round','name','wikipedia', 'results'];
    this.resultService.getResultsList(this.selectedYear).subscribe(
      data => {
        this.resultsListData = data;
      },
    );
  }

  onYearSelected(year: number) {
    this.selectedYear = year;
    this.resultService.getResultsList(this.selectedYear).subscribe(
      data => {
        this.resultsListData = data;
      },
    );
  }

}
