import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { calculateOptions, FormType } from './quiz1-model';

@Component({
  selector: 'refinitiv-quiz-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.scss'],
})
export class Quiz1Component implements OnInit, OnDestroy {
  calculateOptions = calculateOptions;
  inputNumberSubject = new Subject<void>();
  subscription = new Subscription();
  form = this.fb.group({
    inputNumber: this.fb.control(null),
    calculateOptions: this.fb.control(this.calculateOptions[0]),
  });
  calculateResult: boolean | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.inputNumberSubject.pipe(debounceTime(500)).subscribe(() => {
        const num = this.form.get('inputNumber')?.value;
        let numAfterCheck;
        if (num == undefined || num == null || num < 0) {
          numAfterCheck = 1;
        } else {
          numAfterCheck = Math.round(num);
        }
        this.form.get('inputNumber')?.patchValue(numAfterCheck);
        this.calculator();
      })
    );
    this.subscription.add(
      this.form.get('calculateOptions')?.valueChanges.subscribe(() => {
        this.calculator();
      })
    );
  }

  inputNumberkeyup() {
    this.inputNumberSubject.next();
  }

  calculator() {
    const formValue: FormType = this.form.getRawValue();
    if (formValue.calculateOptions == this.calculateOptions[0]) {
      // isPrime
      this.calculateResult = this.calculatorIsPrime(formValue.inputNumber);
    } else {
      // isFibonacci
      this.calculateResult = this.calculatorIsFibonacci(formValue.inputNumber);
    }
  }

  // reference https://www.geeksforgeeks.org/prime-numbers/
  calculatorIsPrime(num: number): boolean {
    if (num <= 1) return false;
    // Check from 2 to n-1
    for (let i = 2; i < num; i++) if (num % i == 0) return false;
    return true;
  }

  // reference https://www.geeksforgeeks.org/check-number-fibonacci-number/
  calculatorIsFibonacci(num: number): boolean {
    return (
      this.isPerfectSquare(5 * num * num + 4) ||
      this.isPerfectSquare(5 * num * num - 4)
    );
  }
  isPerfectSquare(num: number) {
    let numSqrt = Math.sqrt(num);
    return numSqrt * numSqrt == num;
  }
}
