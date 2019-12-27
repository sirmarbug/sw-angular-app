import { Component, OnInit, Input } from '@angular/core';
import { GroupPerson } from 'src/app/core/models/GroupPerson';

@Component({
  selector: 'app-persons-timeline-row',
  templateUrl: './persons-timeline-row.component.html',
  styleUrls: ['./persons-timeline-row.component.scss']
})
export class PersonsTimelineRowComponent implements OnInit {

  @Input() data: Array<GroupPerson>;

  constructor() { }

  ngOnInit() {
  }

}
