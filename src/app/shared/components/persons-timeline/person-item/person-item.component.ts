import { Component, OnInit, Input } from '@angular/core';
import { BMITypes } from 'src/app/core/models';

@Component({
  selector: 'app-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.scss']
})
export class PersonItemComponent implements OnInit {

  @Input() name: string;
  @Input() type: BMITypes;

  constructor() { }

  ngOnInit() {
  }

}
