import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material';
import { VisualizationComponent } from './container/visualizations.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { FlexModule } from '@angular/flex-layout';
import { COLOR_SETS, colorSets } from './services';
import { AreaChartComponent } from './components/area-chart/area-chart.component';
import { CurrencyPipe } from '@angular/common';

@NgModule({
    imports: [
        NgxChartsModule,
        MatCardModule,
        FlexModule
    ],
    declarations: [
        VisualizationComponent,
        PieChartComponent,
        AreaChartComponent
    ],
    providers: [
        { provide: COLOR_SETS, useValue: colorSets },
        { provide: CurrencyPipe, useClass: CurrencyPipe }
    ],
    exports: [VisualizationComponent, PieChartComponent, AreaChartComponent]
})
export class VisualizationModule { }
