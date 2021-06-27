import { Component } from '@angular/core';

@Component({
  selector: 'refinitiv-quiz-quiz3',
  templateUrl: './quiz3.component.html',
  styleUrls: ['./quiz3.component.css'],
})
export class Quiz3Component {
  downloadFile() {
    this.downloadFileFromPath('assets/quiz3.js', 'quiz3.js');
  }

  downloadFileFromPath(path: string, filename: string) {
    const downloadLink = document.createElement('a');
    downloadLink.href = path;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
