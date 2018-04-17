import { NgModule } from '@angular/core';
import { InfoCardsComponent } from './containers/info-cards.component';
import { MatCardModule } from '@angular/material';
import { InfoCardComponent } from './components/info-card.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [InfoCardsComponent, InfoCardComponent],
    exports: [InfoCardsComponent, InfoCardComponent],
    imports: [MatCardModule, FlexLayoutModule, CommonModule]
})
export class InfoCardsModule {

}
