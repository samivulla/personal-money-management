import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';

import { MoneySpentFromModule } from './money-spent-form/money-spent-from.module';
import { TransactionHistoryModule } from './transaction-history/transaction-history.module';

import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TransactionHistoryModule,
    BrowserModule,
    MoneySpentFromModule
  ],
  providers: [{ provide: DecimalPipe, useClass: DecimalPipe }],
  bootstrap: [AppComponent]
})
export class AppModule { }
