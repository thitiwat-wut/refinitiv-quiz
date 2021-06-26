import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'refinitiv-quiz-program-container',
  templateUrl: './program-container.component.html',
  styleUrls: ['./program-container.component.scss'],
})
export class ProgramContainerComponent {
  // historyRoute = new BehaviorSubject<string>('Quiz1');

  constructor(private route: Router) {}

  ngOnInit(): void {}

  routeToProgram(programName: string) {
    this.route.navigate([programName.toLowerCase()]);
  }
}
