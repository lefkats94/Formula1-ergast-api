import { Component, OnInit } from '@angular/core';
import { StandingsApiService } from '../standings-api.service';

@Component({
  selector: 'app-standings-info',
  templateUrl: './standings-info.component.html',
  styleUrls: ['./standings-info.component.css']
})
export class StandingsInfoComponent implements OnInit {

  selectedYear: number;
  selectedType: string;
  standingsData: any[];
  displayedColumns: any[];

  constructor(private standingsService : StandingsApiService){}

  ngOnInit(): void {
    this.selectedYear = 2023;
    this.selectedType = 'drivers';
    this.displayedColumns = this.standingsService.getDisplayedColumns(this.selectedType);
    this.standingsService.getStandings(this.selectedType, this.selectedYear).subscribe(
      data => {
        this.standingsData = data;
      },
    );
  }

  onYearSelected(year: number) {
    this.selectedYear = year;
    this.displayedColumns = this.standingsService.getDisplayedColumns(this.selectedType);
    this.standingsService.getStandings(this.selectedType, this.selectedYear).subscribe(
      data => {
        this.standingsData = data;
      },
    );
  }

  onTypeSelected(type: string) {
    this.selectedType = type;
    this.displayedColumns = this.standingsService.getDisplayedColumns(this.selectedType);
    this.standingsService.getStandings(this.selectedType, this.selectedYear).subscribe(
      data => {
        this.standingsData = data;
      },
    );
  }

}
