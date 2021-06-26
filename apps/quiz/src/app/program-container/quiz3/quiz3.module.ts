import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Quiz3RoutingModule } from './quiz3-routing.module';
import { Quiz3Component } from './quiz3.component';


@NgModule({
  declarations: [
    Quiz3Component
  ],
  imports: [
    CommonModule,
    Quiz3RoutingModule
  ]
})
export class Quiz3Module { }
