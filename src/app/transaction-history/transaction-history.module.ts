import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryComponent } from './containers/transaction-history.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule, MatButtonModule } from '@angular/material';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDialog } from './components/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule,
        MatCheckboxModule,
        FlexLayoutModule,
        MatToolbarModule
    ],
    entryComponents: [ConfirmDialog],
    declarations: [TransactionHistoryComponent, ConfirmDialog],
    exports: [TransactionHistoryComponent]
})
export class TransactionHistoryModule { }
