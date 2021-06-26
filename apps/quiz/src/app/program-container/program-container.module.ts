import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProgramContainerRoutingModule } from './program-container-routing.module';
import { ProgramContainerComponent } from './program-container.component';

@NgModule({
  declarations: [ProgramContainerComponent],
  imports: [CommonModule, ProgramContainerRoutingModule],
})
export class ProgramContainerModule {}
