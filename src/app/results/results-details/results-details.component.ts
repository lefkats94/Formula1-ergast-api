import { Component, OnInit } from '@angular/core';
import { ResultsApiService } from '../results-api.service';

@Component({
  selector: 'app-results-details',
  templateUrl: './results-details.component.html',
  styleUrls: ['./results-details.component.css']
})
export class ResultsDetailsComponent implements OnInit {

  selectedResultYear: string;
  selectedResultRound: string;
  resultsDetailsData: any[];
  displayedColumns: any[];

  constructor(private resultService : ResultsApiService){}

  ngOnInit(): void {
    this.selectedResultYear = window.location.href.split('/').slice(-1)[0].split('-')[0];
    this.selectedResultRound = window.location.href.split('/').slice(-1)[0].split('-')[1];
    this.displayedColumns = ['position', 'name', 'time', 'status', 'points']
    this.resultService.getResultsDetails(this.selectedResultYear, this.selectedResultRound).subscribe(
      data => {
        this.resultsDetailsData = data;
      },
    );
  }
}
