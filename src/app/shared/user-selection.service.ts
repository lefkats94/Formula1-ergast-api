import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserSelectionService {
  private selectedYear = new BehaviorSubject<number>(2023);
  selectedYear$ = this.selectedYear.asObservable();

  private selectedType = new BehaviorSubject<string>('type1');
  selectedType$ = this.selectedType.asObservable();

  setSelectedYear(year: number) {
    this.selectedYear.next(year);
  }

  setSelectedType(type: string) {
    this.selectedType.next(type);
  }
}
