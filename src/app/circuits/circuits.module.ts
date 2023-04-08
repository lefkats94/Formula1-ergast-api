import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CircuitsInfoComponent } from './circuits-info/circuits-info.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CircuitsInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule
  ],
  exports:[
    CircuitsInfoComponent
  ]
})
export class CircuitsModule { }
