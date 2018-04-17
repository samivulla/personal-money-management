import { Component, ChangeDetectionStrategy, Input, Inject } from '@angular/core';
import { COLOR_SETS } from '../../services';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {
    
    @Input()
    results: { name: string, value: number }[];

    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Categories';
    showYAxisLabel = true;
    yAxisLabel = 'Money';
    SCHEME_NAME = 'neons';
    colorScheme = (this.colorSet as Array<any>).find(val => val.name === this.SCHEME_NAME);

    constructor(@Inject(COLOR_SETS) private colorSet ) { }
}
