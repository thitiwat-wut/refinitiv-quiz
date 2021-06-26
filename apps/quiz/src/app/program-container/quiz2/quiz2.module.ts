import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Quiz2RoutingModule } from './quiz2-routing.module';
import { Quiz2Component } from './quiz2.component';

@NgModule({
  declarations: [Quiz2Component],
  imports: [CommonModule, Quiz2RoutingModule, ReactiveFormsModule],
})
export class Quiz2Module {}
