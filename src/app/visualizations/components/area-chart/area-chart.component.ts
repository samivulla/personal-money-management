import { Component, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { COLOR_SETS } from '../../services';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaChartComponent {

    @Input()
    results;

    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Time';
    showYAxisLabel = true;
    yAxisLabel = 'Money';
    SCHEME_NAME = 'neons';
    colorScheme = (this.colorSet as Array<any>).find(val => val.name === this.SCHEME_NAME);


    constructor(@Inject(COLOR_SETS) private colorSet, private currencyPipe: CurrencyPipe) { }

    get hasData() {
        let hasData = false;
        this.results.forEach((val) => {
            hasData = !!val.series.length;
            if (hasData) return;
        });
        return hasData;
    }

    yAxisFormatterFactory() {
        return (val) => {
            return this.currencyPipe.transform(val, 'INR', 'symbol');
        }
    }


}
