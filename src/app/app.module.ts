import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

import { MoneySpentFromModule } from './money-spent-form/money-spent-from.module';
import { TransactionHistoryModule } from './transaction-history/transaction-history.module';
import { InfoCardsModule } from './info-cards/info-cards.module';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';

import { reducers } from './store';

import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['transactions'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    TransactionHistoryModule,
    BrowserModule,
    InfoCardsModule,
    MoneySpentFromModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [{ provide: DecimalPipe, useClass: DecimalPipe }],
  bootstrap: [AppComponent]
})
export class AppModule { }
