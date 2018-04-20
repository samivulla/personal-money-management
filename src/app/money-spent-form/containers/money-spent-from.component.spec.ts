import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MoneySpentFormComponent } from './money-spent-form.component';


import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ShowOnSubmitted } from '../services';
import { SharedModule } from '../../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { DecimalPipe } from '@angular/common';


import { StoreModule, ActionReducer, MetaReducer, Store } from '@ngrx/store';

import { reducers, AppState } from '../../store';

import { localStorageSync } from 'ngrx-store-localstorage';
import { AddTransaction } from '../../store/transactions';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ['transactions'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

describe('money-spent-from-component', () => {
    let fixture: ComponentFixture<MoneySpentFormComponent>;
    let component: MoneySpentFormComponent;
    let store: Store<AppState>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [MoneySpentFormComponent],
            providers: [DecimalPipe, ShowOnSubmitted],
            imports: [
                SharedModule,
                MatNativeDateModule,
                MatDatepickerModule,
                MatCardModule,
                MatButtonModule,
                MatSelectModule,
                FlexLayoutModule,
                MatInputModule,
                BrowserAnimationsModule,
                CommonModule,
                ReactiveFormsModule,
                StoreModule.forRoot(reducers, { metaReducers })
            ]
        });
        store = TestBed.get(Store);
        fixture = TestBed.createComponent(MoneySpentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        spyOn(store, 'dispatch').and.callThrough();  
    });

    it('should create the component', () => {
        expect(component).toBeDefined();
    });

    it('transaction type and money is required', () => {
        expect(component.trasactionForm.get('transasctionType').hasError('required')).toBeTruthy();
        expect(component.trasactionForm.get('moneySpent').hasError('required')).toBeTruthy();
    });

    it('should dispatch an action to store whenever form data is saved', () => {
        const transaction = {
            transasctionType: {
                id: 'FOOD',
                label: 'Food'
            },
            moneySpent: 1000,
            description: '__description__',
            date: new Date(),
            id: '__dfdfdfdf-dfdfd-dfdf__'
        };
        component.trasactionForm.patchValue(transaction);
        const action = new AddTransaction(transaction);
        const value = component.trasactionForm.value;
        component.saveTransaction('__dfdfdfdf-dfdfd-dfdf__');
        expect(store.dispatch).toHaveBeenCalledWith(action);
    });


}); 
