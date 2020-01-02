import { Component, OnInit, Input } from '@angular/core';
import { PersonGroup } from 'src/app/core/models';

@Component({
  selector: 'app-persons-timeline-row',
  templateUrl: './persons-timeline-col.component.html',
  styleUrls: ['./persons-timeline-col.component.scss']
})
export class PersonsTimelineColComponent implements OnInit {

  @Input() data: Array<PersonGroup>;

  constructor() { }

  ngOnInit() {
  }

}
