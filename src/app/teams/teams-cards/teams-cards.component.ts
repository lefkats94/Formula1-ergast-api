import { Component, OnInit } from '@angular/core';
import { TeamsApiService } from '../team-api.service';

@Component({
  selector: 'app-teams-cards',
  templateUrl: './teams-cards.component.html',
  styleUrls: ['./teams-cards.component.css']
})
export class TeamsCardsComponent implements OnInit {

  selectedYear: number;
  selectedType: string;
  teamsData: any[];

  constructor(private teamsService : TeamsApiService){}

  ngOnInit(): void {
    this.selectedYear = 2023;
    this.selectedType = 'drivers';
    this.teamsService.getTeams(this.selectedType, this.selectedYear).subscribe(
      data => {
        this.teamsData = data;
      },
    );
  }

  onYearSelected(year: number) {
    this.selectedYear = year;
    this.teamsService.getTeams(this.selectedType, this.selectedYear).subscribe(
      data => {
        this.teamsData = data;
      },
    );
  }

  onTypeSelected(type: string) {
    this.selectedType = type;
    this.teamsService.getTeams(this.selectedType, this.selectedYear).subscribe(
      data => {
        this.teamsData = data;
      },
    );
  }
}
