import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneySpentFormComponent } from './money-spent-form.component';
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { StoreModule, ActionReducerMap } from '@ngrx/store';   

import { moneySpentFromReducer } from './money-spent-from.reducers';



export const reducers: ActionReducerMap<any> = {
    transactions: moneySpentFromReducer
}

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        FlexLayoutModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule
    ],
    declarations: [MoneySpentFormComponent],
    exports: [MoneySpentFormComponent]
})
export class MoneySpentFromModule { }
