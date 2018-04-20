import { TestBed, ComponentFixture } from '@angular/core/testing';
import { VisualizationComponent } from './visualizations.component';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../../shared/shared.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { DecimalPipe } from '@angular/common';


import { StoreModule, ActionReducer, MetaReducer, Store } from '@ngrx/store';

import { reducers, AppState } from '../../store';

import { localStorageSync } from 'ngrx-store-localstorage';
import { AddTransaction } from '../../store/transactions';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({ keys: ['transactions'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
const mockData = JSON.parse(`[{ "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:14:47.131Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:14:22.880Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:13:15.913Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:12:54.957Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:12:37.354Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:11:56.066Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:11:16.925Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:10:10.743Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:08:41.295Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:08:32.378Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T06:02:37.773Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T05:48:46.299Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T05:48:00.432Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T05:47:42.623Z", "id": "__dfdfdfdf-dfdfd-dfdf__" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T05:47:15.685Z", "id": "a989a8b2-44aa-2391-a46d-9588e74dfdf1-1524203235686" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T05:46:58.872Z", "id": "b74245f8-8966-afbb-72ed-d9c4125ed159-1524203218874" }, { "transasctionType": { "id": "FOOD", "label": "Food" }, "moneySpent": 1000, "description": "__description__", "date": "2018-04-20T05:40:24.166Z", "id": "106cf877-7633-aeb5-695c-e72af61db7dc-1524202824167" }]`);


describe('visualization-component', () => {
    let component: VisualizationComponent;
    let fixture: ComponentFixture<VisualizationComponent>;


    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [VisualizationComponent],
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
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(VisualizationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the component', () => {
        expect(component).toBeDefined();
    });

    it('should make data for pie and line chart on load', () => {
        component.makeChartData(mockData);
        expect(component.areaChartData).toBeDefined();
        expect(component.barChartData).toBeDefined();
    });

});
