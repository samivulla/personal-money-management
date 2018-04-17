import { Transaction } from '../models';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { transactionReducer } from './transactions';

export interface AppState {
    transactions: Transaction[]
};

export const reducers: ActionReducerMap<AppState> = {
    transactions: transactionReducer
}

export const getTransactions = createFeatureSelector<Transaction[]>('transactions');
