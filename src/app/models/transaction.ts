import { TransactionType } from './transaction-type';

export interface Transaction {
    transasctionType: TransactionType;
    moneySpent: number;
    description: string;
    id: string;
    date: Date;
}
