import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HRoutingModule } from './h-routing.module';
import { HComponent } from './h.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HComponent],
  imports: [
    CommonModule,
    HRoutingModule,
  ]
})
export class HModule { }
