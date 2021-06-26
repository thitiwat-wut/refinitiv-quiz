import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Quiz3Component } from './quiz3.component';

const routes: Routes = [{ path: '', component: Quiz3Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Quiz3RoutingModule { }
