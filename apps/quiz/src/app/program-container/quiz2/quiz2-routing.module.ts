import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz2Component } from './quiz2.component';

const routes: Routes = [{ path: '', component: Quiz2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Quiz2RoutingModule { }
