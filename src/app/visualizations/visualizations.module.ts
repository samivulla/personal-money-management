import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material';
import { VisualizationComponent } from './container/visualizations.component';
import { VerticalChartComponent } from './components/vertical-bar-chart/vertical-bar-chart.component';
import { FlexModule } from '@angular/flex-layout';
import { COLOR_SETS, colorSets } from './services';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
    imports: [
        NgxChartsModule,
        MatCardModule,
        FlexModule
    ],
    declarations: [
        VisualizationComponent,
        VerticalChartComponent,
        LineChartComponent
    ],
    providers: [
        { provide: COLOR_SETS, useValue: colorSets },
        { provide: CurrencyPipe, useClass: CurrencyPipe }
    ],
    exports: [VisualizationComponent, VerticalChartComponent, LineChartComponent]
})
export class VisualizationModule { }
