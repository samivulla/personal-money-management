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
    lineChartData;

    constructor(private store: Store<AppState>) {
        this.transactions$ = this.store.pipe(select(getTransactions));
    }

    ngOnInit() {
        this.subscription = this.transactions$.subscribe(this.makeChartData.bind(this));
    }

    makeChartData(data: Transaction[]) {
        this.barChartData = this.makeBarChartData(data);
        this.lineChartData = this.makeLineChartData(data);
    }

    makeBarChartData(data: Transaction[]) {
        const reducedData = data.reduce((acc, val) => {
            let transactionId = val.transasctionType.id;
            if (acc[transactionId]) {
                acc[transactionId] += val.moneySpent;
            } else {
                acc[transactionId] = val.moneySpent;
            }
            return acc;
        }, {});
        return Object.keys(reducedData)
            .map((transactionType: string) => {
                return { name: transactionType, value: reducedData[transactionType] };
            });
    }

    makeLineChartData(data: Transaction[]) {
        return data.reduce((acc, val) => {
            let transactionType = val.transasctionType.id,
                accItem = acc.find(accVal => accVal.name === transactionType),
                toPush = { name: val.date, value: val.moneySpent, description: val.description };
            if (accItem) {
                accItem.series.push(toPush);
            } else {
                acc.push({ name: transactionType, series: [toPush] });
            }
            return acc;
        }, []);
    }

}                                          
