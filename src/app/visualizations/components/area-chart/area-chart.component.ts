import { Component, ChangeDetectionStrategy, Input, Inject, SimpleChanges, OnChanges } from '@angular/core';
import { COLOR_SETS } from '../../services';
import { CurrencyPipe } from '@angular/common';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-area-chart',
    templateUrl: './area-chart.component.html',
    styleUrls: ['./area-chart.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AreaChartComponent implements OnChanges {

    @Input()
    results;
    dataAvail = false;
    highcharts: any;
    chartOptions: any;
    updateChart: boolean;

    constructor(private currencyPipe: CurrencyPipe) {
        this.highcharts = Highcharts;
        this.initCharts();
    }

    ngOnChanges(obj: SimpleChanges) {
        if (this.results) {
            this.chartOptions.series = this.results;
            this.updateChart = true;
        }
    }

    initCharts() {
        this.chartOptions = {
            xAxis: {
                type: 'datetime',
                title: {
                    text: 'Time'
                }
            },
            yAxis: {
                title: {
                    text: 'Amount'
                },
                labels: {
                    format: '{value} ₹'
                }
            },
            chart: {
                height: 300,
                type: 'spline',
                spacing: [10,0,0,0]
            },
            title: {
                text: undefined
            },
            series: [],
            credits: {
                enabled: false
            }
        };
    }

}
