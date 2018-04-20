import { Component, OnInit, Inject, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { DecimalPipe } from '@angular/common';
import { Transaction, TransactionType } from '../../models';
import { ShowOnSubmitted } from '../services';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { AddTransaction } from '../../store/transactions';
import { UniqueIDGenerator } from '../../shared/services';

@Component({
  selector: 'app-money-spent-form',
  templateUrl: './money-spent-form.component.html',
  styleUrls: ['./money-spent-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoneySpentFormComponent implements OnInit {

  trasactionForm: FormGroup;
  tranactionType: TransactionType[];

  constructor(
    private fb: FormBuilder,
    private decimalPipe: DecimalPipe,
    public errorMatcher: ShowOnSubmitted,
    private store: Store<AppState>,
    private idGenerator: UniqueIDGenerator
  ) { }

  ngOnInit() {
    this.setUpTheForm();
    this.getTranasctionTypes();
  }

  getTranasctionTypes() {
    this.tranactionType = [{
      id: 'FOOD',
      label: 'Food'
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
      description: [null],
      date: [new Date]
    });
  }

  resetForm() {
    this.trasactionForm.reset();
  }

  getRandomNumber() {
    return this.idGenerator.getUniqueId();  
  }

  saveTransaction(randomNumber = this.getRandomNumber()) {
    if (this.trasactionForm.valid) {
      const transaction: Transaction = Object.assign({}, this.trasactionForm.value);
      transaction.id = randomNumber;
      this.store.dispatch(new AddTransaction(transaction));
      this.resetForm();
    }
  }

}
