import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsTimelineComponent, PersonItemComponent, PersonsTimelineColComponent } from './components';

const components = [
  PersonsTimelineComponent,
  PersonItemComponent,
  PersonsTimelineColComponent
];

@NgModule({
  declarations: [components],
  imports: [
    CommonModule
  ],
  exports: [components]
})
export class SharedModule { }
