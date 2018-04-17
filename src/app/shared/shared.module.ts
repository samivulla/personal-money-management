import { NgModule } from '@angular/core';
import { UniqueIDGenerator } from './services';

@NgModule({
    providers: [UniqueIDGenerator]
})
export class SharedModule { }

