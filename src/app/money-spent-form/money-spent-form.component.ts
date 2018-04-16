import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShowOnSubmitted } from './custom-error-matcher';
import { ErrorStateMatcher } from '@angular/material/core';
import { DecimalPipe } from '@angular/common';
import { Transaction, TransactionType } from '../models';

@Component({
  selector: 'app-money-spent-form',
  templateUrl: './money-spent-form.component.html',
  styleUrls: ['./money-spent-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoneySpentFormComponent implements OnInit {

  private trasactionForm: FormGroup;
  private tranactionType: TransactionType[];
  private transactionFormSubmitted = false;
  private errorMatcher: ErrorStateMatcher;

  constructor(private fb: FormBuilder, private decimalPipe: DecimalPipe) {
    this.errorMatcher = new ShowOnSubmitted();
  }

  ngOnInit() {
    this.setUpTheForm();
    this.getTranasctionTypes();
  }

  getTranasctionTypes() {
    this.tranactionType = [{
      id: 'GROCERY',
      label: 'Grocery'
    }, {
      id: 'SHOPPING',
      label: 'Shopping '
    }, {
      id: 'OTHERS',
      label: 'Others'
    }];
  }

  setUpTheForm() {
    this.trasactionForm = this.fb.group({
      transasctionType: [null, Validators.required],
      moneySpent: [null, Validators.required],
      description: [null]
    });
  }

  saveTransaction() {
    this.transactionFormSubmitted = true;
    if (this.trasactionForm.valid) {
      const transaction = Object.assign({}, this.trasactionForm.value);
      console.log(transaction);
      this.trasactionForm.markAsPristine();
      this.trasactionForm.reset();
    }
  }

}
