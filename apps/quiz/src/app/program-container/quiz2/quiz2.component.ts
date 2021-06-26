import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'refinitiv-quiz-quiz2',
  templateUrl: './quiz2.component.html',
  styleUrls: ['./quiz2.component.scss'],
})
export class Quiz2Component implements OnInit, OnDestroy {
  subscription = new Subscription();
  valueTable: string[] = [];
  filterInput = new FormControl('');

  getData$ = this.getData().pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private http: HttpClient) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.iniValueTable();
    this.subscription.add(
      this.filterInput.valueChanges
        .pipe(debounceTime(500))
        .subscribe((filterInput) => {
          this.setValueTable(filterInput);
        })
    );
  }

  iniValueTable() {
    this.setValueTable('');
  }

  setValueTable(filter: string) {
    this.subscription.add(
      this.getData$.subscribe((data) => {
        this.valueTable = data.filter((d) => d.includes(filter));
      })
    );
  }

  getData() {
    return this.http.get<string[]>('https://api.publicapis.org/categories');
  }
}
