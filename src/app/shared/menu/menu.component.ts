import { Component, OnInit } from '@angular/core';
import { UserSelectionService } from '../user-selection.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userSelection: UserSelectionService){}

  ngOnInit(): void {
    this.userSelection.setSelectedYear(2023);
    this.userSelection.setSelectedType("drivers");
  }

  onYearSelected(year: number) {
    this.userSelection.setSelectedYear(year);
  }

  onTypeSelected(type: string) {
    this.userSelection.setSelectedType(type);
  }

}
