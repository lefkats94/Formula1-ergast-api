import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation-back',
  templateUrl: './navigation-back.component.html',
  styleUrls: ['./navigation-back.component.css']
})
export class NavigationBackComponent {

  constructor(private location: Location){}

  goBack() {
    this.location.back();
  }
}
