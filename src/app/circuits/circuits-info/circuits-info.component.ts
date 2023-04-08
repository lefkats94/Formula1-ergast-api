import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserSelectionService } from 'src/app/shared/user-selection.service';
import { CircuitsApiService } from '../circuits-api.service';

@Component({
  selector: 'app-circuits-info',
  templateUrl: './circuits-info.component.html',
  styleUrls: ['./circuits-info.component.css']
})
export class CircuitsInfoComponent implements OnDestroy{

  selectedType: string = "circuits";
  selectedYear: number;
  circuitsData: any[];
  subscription: Subscription;

  constructor(private userSelection: UserSelectionService, private circuitsService : CircuitsApiService){
    this.subscription = this.userSelection.selectedYear$.subscribe((year) => {
      this.selectedYear = year;
      this.onSelectedData();
    });
  }

  onSelectedData(){
      this.circuitsService.getCircuits(this.selectedYear).subscribe(
        data => {
          this.circuitsData = data;
        },
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
