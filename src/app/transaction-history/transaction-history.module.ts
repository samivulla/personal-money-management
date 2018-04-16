import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from './transaction-history.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [CommonModule, MatCardModule],
    declarations: [TransactionHistoryComponent],
    exports: [TransactionHistoryComponent]
})
export class TransactionHistoryModule { }
