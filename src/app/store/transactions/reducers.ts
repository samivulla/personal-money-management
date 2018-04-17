import * as transactionActions from './actions';
import { Transaction } from '../../models';


const removeTransaction = (state: Transaction[], payload: Transaction) => {
    return state.filter(trans => trans.id !== payload.id);
}

const updateTransaction = (state: Transaction[], payload: Transaction) => {
    const _state = { ...state };
    let index = _state.findIndex(trans => trans.id === payload.id);
    (index > 0) && (_state[index] = payload);
    return _state;
}

export function transactionReducer(state: Transaction[] = [], action: transactionActions.All) {
    switch (action.type) {
        case transactionActions.ADD_TRANSACTION: {
            return [action.payload, ...state];
        };
        case transactionActions.REMOVE_TRANSACTION: {
            return removeTransaction(state, action.payload);
        };
        case transactionActions.UPDATE_TRANSACTION: {
            return updateTransaction(state, action.payload);
        };
    }
    return state;
}
