import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MoneySpentFormComponent } from './containers';
import { ShowOnSubmitted } from './services';
import { SharedModule } from '../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatInputModule,
        FlexLayoutModule,
        MatSelectModule,
        MatButtonModule,
        SharedModule,
        MatCardModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: [ShowOnSubmitted],
    declarations: [MoneySpentFormComponent],
    exports: [MoneySpentFormComponent]
})
export class MoneySpentFromModule { }
