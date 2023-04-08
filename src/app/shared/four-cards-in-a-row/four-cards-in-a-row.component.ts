import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-four-cards-in-a-row',
  templateUrl: './four-cards-in-a-row.component.html',
  styleUrls: ['./four-cards-in-a-row.component.css']
})
export class FourCardsInARowComponent {
  @Input() teamsData: any[];
  @Input() circuitsData: any[];
  @Input() selectedType: string;
}
