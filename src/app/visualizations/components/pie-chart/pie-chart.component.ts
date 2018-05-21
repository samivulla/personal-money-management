import {
    Component,
    ChangeDetectionStrategy,
    Input,
    Inject,
    SimpleChanges
} from '@angular/core';
import { COLOR_SETS } from '../../services';
import { CurrencyPipe } from '@angular/common';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PieChartComponent {

    @Input()
    results: any;
    highcharts: any;
    chartOptions: any;
    updateChart: boolean;

    constructor() {
        this.highcharts = Highcharts;
        this.initCharts();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.results && changes.results.currentValue) {
            this.chartOptions.series = [this.results];
            this.updateChart = true;
        }
    }

    initCharts() {
        this.chartOptions = {
            credits: {
                enabled: false
            },
            chart: {
                type: 'pie',
                height: 300
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    showInLegend: true
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
                valueSuffix: ' ₹',
            },
            title: {
                text: undefined
            },
            series: []
        };
    }
}
