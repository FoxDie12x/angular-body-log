import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HComponent} from './h.component';


const routes: Routes = [
  {path: '', component: HComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRoutingModule { }
