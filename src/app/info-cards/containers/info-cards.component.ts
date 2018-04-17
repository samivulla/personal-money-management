import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getTransactions } from '../../store';
import { Transaction } from '../../models';
import { Observable } from 'rxjs/Observable';
import { getHtmlTagDefinition } from '@angular/compiler';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-info-cards',
  templateUrl: './info-cards.component.html',
  styleUrls: ['./info-cards.component.css']
})
export class InfoCardsComponent implements OnInit {

  private transactions$: Observable<Transaction[]>;
  private transactionSubscription: Subscription;
  totalMoneySpent = 0;
  foodMoneySpent = 0;
  shoppingMoneySpent = 0;
  otherMoneySpent = 0;

  constructor(private store: Store<AppState>) {
    this.transactions$ = this.store.pipe(select(getTransactions));
  }

  ngOnInit() {
    this.transactionSubscription = this.transactions$.subscribe(this.aggregateValues.bind(this));
  }

  aggregateValues(values: Transaction[]) {
    this.foodMoneySpent = this.generalAgg(values, 'FOOD');
    this.shoppingMoneySpent = this.generalAgg(values, 'SHOPPING');
    this.otherMoneySpent = this.generalAgg(values, 'OTHERS');
    this.totalMoneySpent = this.foodMoneySpent + this.shoppingMoneySpent + this.otherMoneySpent;
  }

  generalAgg(values: Transaction[], type: string) {
    return values.reduce((acc, val) => {
      if (val.transasctionType.id === type) { acc = acc + val.moneySpent; }
      return acc;
    }, 0);
  }

}
