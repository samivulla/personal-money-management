import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../store';
import { Transaction } from '../../models';
import { Observable } from 'rxjs/Observable';
import { getTransactions } from '../../store'
import { Subscription } from 'rxjs/Subscription';
import { ColDef, GridApi } from 'ag-grid';
import { AgGridNg2 } from 'ag-grid-angular';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { _isNumberValue } from '@angular/cdk/coercion';
import { REMOVE_TRANSACTION } from '../../store/transactions';
import { ConfirmDialog } from '../components/confirm-dialog.component';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit, AfterViewInit {

  transactions$: Observable<Transaction[]>;
  transactionSubscription: Subscription;
  transactionData: Transaction[];
  columnsToDisplay = ['select', 'moneySpent', 'transasctionType', 'description', 'date', 'customActions'];

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  initialSelection: Transaction[];
  allowMultiSelect = true;
  selection: SelectionModel<Transaction>;

  dataSource = new MatTableDataSource<Transaction>();

  constructor(private store: Store<AppState>, private dialog: MatDialog) {
    this.transactions$ = this.store.pipe(select(getTransactions));
  }

  ngOnInit() {
    this.transactionSubscription = this.transactions$.subscribe(this.setDataToSource.bind(this));
    this.setUpCustomSortDataAccessor();
    this.allowMultiSelect = true;
    this.selection = new SelectionModel<Transaction>(this.allowMultiSelect, this.initialSelection);
  }

  setDataToSource(data) {
    this.dataSource.data = data;
  }

  setUpCustomSortDataAccessor() {
    this.dataSource.sortingDataAccessor = (data, sortHeaderId) => {
      let value;
      if (sortHeaderId === 'transasctionType') {
        value = data['transasctionType'].label;
      } else {
        value = data[sortHeaderId]
      }
      return _isNumberValue(value) ? Number(value) : value;
    }
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  askAndDelete(transaction) {
    this.openConfirmDialog('Are you sure? You want to delete this item?')
      .subscribe(result => {
        result && this.deleteItem(transaction);
      });
  }

  deleteSelectedItem() {
    this.openConfirmDialog('Are you sure? You want to delete these items?')
      .subscribe(result => {
        if (result) {
          this.selection.selected
            .forEach(this.deleteItem.bind(this));
          this.selection.deselect(...this.selection.selected);
        }
      });
  }

  openConfirmDialog(customMessage) {
    return this.dialog.open(ConfirmDialog, {
      height: '190px',
      width: '260px',
      data: { customMessage }
    }).afterClosed();
  }

  deleteItem(transaction) {
    this.store.dispatch({ type: REMOVE_TRANSACTION, payload: transaction });
    this.selection.deselect(transaction);
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  get toolBarHeaderName() {
    let selectedCount = this.selection.selected.length;
    return selectedCount ? `${selectedCount} item${selectedCount > 1 ? 's' : ''} selected` : 'History';
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
