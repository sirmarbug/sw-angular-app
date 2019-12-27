import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsTimelineComponent, PersonItemComponent, PersonsTimelineRowComponent } from './components';

const components = [
  PersonsTimelineComponent,
  PersonItemComponent,
  PersonsTimelineRowComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class SharedModule { }
