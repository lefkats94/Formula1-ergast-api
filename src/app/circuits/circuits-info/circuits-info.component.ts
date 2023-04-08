import { Component } from '@angular/core';
import { CircuitsApiService } from '../circuits-api.service';

@Component({
  selector: 'app-circuits-info',
  templateUrl: './circuits-info.component.html',
  styleUrls: ['./circuits-info.component.css']
})
export class CircuitsInfoComponent {
  selectedYear: number;
  selectedType: string;
  circuitsData: any[];

  constructor(private circuitsService : CircuitsApiService){}

  ngOnInit(): void {
    this.selectedYear = 2023;
    this.selectedType = 'circuits';
    this.circuitsService.getCircuits(this.selectedYear).subscribe(
      data => {
        this.circuitsData = data;
      },
    );
  }

  onYearSelected(year: number) {
    this.selectedYear = year;
    this.circuitsService.getCircuits(this.selectedYear).subscribe(
      data => {
        this.circuitsData = data;
      },
    );
  }
}
