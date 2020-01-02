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

  isBlack(): boolean {
    return this.type === BMITypes.Below16 ? true : false;
  }

  isGreen(): boolean {
    return this.type === BMITypes.Betwen1624 ? true : false;
  }

  isOrange(): boolean {
    return this.type === BMITypes.Betwen2540 ? true : false;
  }

  isRed(): boolean {
    return this.type === BMITypes.Above40 ? true : false;
  }

}
