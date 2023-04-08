import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-drivers-or-constructors',
  templateUrl: './drivers-or-constructors.component.html',
  styleUrls: ['./drivers-or-constructors.component.css']
})
export class DriversOrConstructorsComponent implements OnInit {
  @Output() selectedType = new EventEmitter<string>();
  isActive;

  ngOnInit(): void {
    this.isActive = 'drivers';
  }

  selectDrivers() {
    this.selectedType.emit('drivers');
    this.isActive = 'drivers';
  }

  selectConstructors() {
    this.selectedType.emit('constructors');
    this.isActive = 'constructors';
  }
}
