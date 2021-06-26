import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Quiz1RoutingModule } from './quiz1-routing.module';
import { Quiz1Component } from './quiz1.component';

@NgModule({
  declarations: [Quiz1Component],
  imports: [CommonModule, Quiz1RoutingModule, ReactiveFormsModule],
})
export class Quiz1Module {}
