import { Action } from '@ngrx/store';
import { Transaction } from '../../models';

export const ADD_TRANSACTION = '[Transaction] Add Transaction';
export const REMOVE_TRANSACTION = '[Transaction] Remove Transaction';
export const UPDATE_TRANSACTION = '[Transaction] Update Transaction';

export class AddTransaction implements Action {
    readonly type = ADD_TRANSACTION;
    constructor(public payload: Transaction) { }
}

export class RemoveTransaction implements Action {
    readonly type = REMOVE_TRANSACTION;
    constructor(public payload: Transaction) { }
}

export class UpdateTransaction implements Action {
    readonly type = UPDATE_TRANSACTION;
    constructor(public payload: Transaction) {}
}

export type All = AddTransaction | RemoveTransaction | UpdateTransaction;
