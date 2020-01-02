import { Component, OnInit, Input } from '@angular/core';
import { GroupPerson } from 'src/app/core/models/GroupPerson';

@Component({
  selector: 'app-persons-timeline-row',
  templateUrl: './persons-timeline-col.component.html',
  styleUrls: ['./persons-timeline-col.component.scss']
})
export class PersonsTimelineColComponent implements OnInit {

  @Input() data: Array<GroupPerson>;

  constructor() { }

  ngOnInit() {
  }

}
