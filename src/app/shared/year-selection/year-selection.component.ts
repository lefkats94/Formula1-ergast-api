import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-year-selection',
  templateUrl: './year-selection.component.html',
  styleUrls: ['./year-selection.component.css']
})
export class YearSelectionComponent implements OnInit {

  years = [];
  @Output() selectedYear = new EventEmitter<any>();

  ngOnInit(): void {
    for (var i = 2023; i >= 1950; i--) {
      this.years.push(i);
  }
  }

  selectYear(year) {
    this.selectedYear.emit(year.value);
  }

}
