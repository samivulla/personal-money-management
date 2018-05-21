import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, getTransactions } from '../../store';
import { Transaction } from '../../models';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-visualizations',
    templateUrl: './visualizations.component.html',
    styleUrls: ['./visualizations.component.css']
})
export class VisualizationComponent implements OnInit {

    private transactions$: Observable<Transaction[]>;
    private subscription: Subscription;
    barChartData: { name: string; value: number }[];
    areaChartData;

    constructor(private store: Store<AppState>) {
        this.transactions$ = this.store.pipe(select(getTransactions));
    }

    ngOnInit() {
        this.subscription = this.transactions$.subscribe(this.makeChartData.bind(this));
    }

    makeChartData(data: Transaction[]) {
        this.barChartData = this.makeBarChartData(data);
        this.areaChartData = this.makeAreaChartData(data);
    }

    makeBarChartData(data: Transaction[]) {
        const reducedData = data.reduce((acc, val) => {
            let transactionId = val.transasctionType.id;
            if (acc[transactionId]) { acc[transactionId] += val.moneySpent; }
            else { acc[transactionId] = val.moneySpent; }
            return acc;
        }, {});
        return Object.keys(reducedData)
            .map((transactionType: string) => {
                return { name: transactionType, value: reducedData[transactionType] };
            });
    }

    makeAreaChartData(data: Transaction[]) {
        return ['FOOD', 'OTHERS', 'SHOPPING'].map((type) => {
            return { name: type, data: this.areaChartDataAggregator(data, type) };
        });
    }

    private areaChartDataAggregator(data, type) {
        return data.filter(val => val.transasctionType.id === type)
            .reduce((acc, val) => {
                let item = acc.find((accVal) => { 
                    let sourceDate = accVal.x.getDate(), 
                    sourceMonth = accVal.x.getMonth(),
                        sourceYear = accVal.x.getFullYear(),
                        targetDate = val.date.getDate(),
                        targetMonth = val.date.getMonth(),
                        targetYear = val.date.getFullYear();
                    return sourceDate === targetDate && sourceMonth === targetMonth && sourceYear === targetYear;
                });
                if (item) item.y += val.moneySpent;
                else acc.push({ x: val.date, y: val.moneySpent });
                return acc;
            }, []);
    }

}                                          
