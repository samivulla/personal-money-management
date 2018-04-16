import { Action } from '@ngrx/store';
import { Transaction } from '../models';

export const ADD_TRANSACTION = '[MoneySpentFrom] Add transaction';

export class AddTransaction implements Action {
    readonly type = ADD_TRANSACTION;
    constructor(public payload: Transaction) {}
}

export type All = AddTransaction;
