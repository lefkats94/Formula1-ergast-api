import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { YearSelectionComponent } from './year-selection/year-selection.component';
import { DriversOrConstructorsComponent } from './drivers-or-constructors/drivers-or-constructors.component';
import { FourCardsInARowComponent } from './four-cards-in-a-row/four-cards-in-a-row.component';
import { TableComponent } from './table/table.component';
import { NavigationBackComponent } from './navigation-back/navigation-back.component';

@NgModule({
  declarations: [
    MenuComponent,
    YearSelectionComponent,
    DriversOrConstructorsComponent,
    FourCardsInARowComponent,
    TableComponent,
    NavigationBackComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule
  ],
  exports: [
    MenuComponent,
    YearSelectionComponent,
    DriversOrConstructorsComponent,
    FourCardsInARowComponent,
    TableComponent
  ]
})
export class SharedModule { }
