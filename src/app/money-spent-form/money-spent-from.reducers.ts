import * as moneySpentFromAction from './money-spent-from.actions';
import { Transaction } from '../models';

export function moneySpentFromReducer(state: Transaction[] = [], action: moneySpentFromAction.All) {
    switch(action.type) {
        case moneySpentFromAction.ADD_TRANSACTION: {
            return [...state, action.payload];
        }
    }    
    return state;
}
