import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramContainerComponent } from './program-container.component';

const routes: Routes = [
  {
    path: '',
    component: ProgramContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'quiz1',
      },
      {
        path: 'quiz1',
        loadChildren: () =>
          import('./quiz1/quiz1.module').then((m) => m.Quiz1Module),
      },
      {
        path: 'quiz2',
        loadChildren: () =>
          import('./quiz2/quiz2.module').then((m) => m.Quiz2Module),
      },
      {
        path: 'quiz3',
        loadChildren: () =>
          import('./quiz3/quiz3.module').then((m) => m.Quiz3Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgramContainerRoutingModule {}
