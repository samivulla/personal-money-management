import { Component, Input, Attribute, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class InfoCardComponent {
    @Input()
    data: any;
    constructor(@Attribute('dataTitle') public title: String) { }
}

