import { Component, OnInit, Input } from '@angular/core';
import { Person, Response, Result } from 'src/app/core/models';
import { StarWarsService } from 'src/app/core/services';
import { BMICalc, birthYearConvert, BMIType } from '../../utils';
import { GroupPerson } from 'src/app/core/models/GroupPerson';

@Component({
  selector: 'app-persons-timeline',
  templateUrl: './persons-timeline.component.html',
  styleUrls: ['./persons-timeline.component.scss']
})
export class PersonsTimelineComponent implements OnInit {

  people: Array<Person> = new Array<Person>();
  data: Array<GroupPerson>;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.getData();
    this.groupInit();
  }

  private groupInit(): void {
    this.data = [
      new GroupPerson('Unknown', new Array<Person>()),
      new GroupPerson('0 - 20 BBY', new Array<Person>()),
      new GroupPerson('20 - 40 BBY', new Array<Person>()),
      new GroupPerson('40 - 60 BBY', new Array<Person>()),
      new GroupPerson('60 - 80 BBY', new Array<Person>()),
      new GroupPerson('80 - 100 BBY', new Array<Person>()),
      new GroupPerson('100 BBY++', new Array<Person>())
    ];
  }

  getData(url?: string): void {
    this.starWarsService.getData(url).subscribe(
      (res: Response) => {
        console.log('StarWarsService getData response', res);
        res.results.forEach((person: Result) => {
          const bmi = BMICalc(Number(person.height), Number(person.mass));
          const newPerson = new Person(person.name, birthYearConvert(person.birth_year),
          Number(person.height), Number(person.mass), bmi, BMIType(bmi));
          this.people.push(newPerson);
        });
        if (res.next) {
          this.getData(res.next);
        } else {
          console.log('Final', this.people.sort(this.sortFunc));
          this.people = this.people.sort(this.sortFunc);
          this.groupPeople();
        }
      }
    );
  }

  private sortFunc(a: Person, b: Person) {
    return a.birthYear - b.birthYear;
  }

  private groupPeople(): void {
    this.people.forEach((people: Person) => {
      if (isNaN(people.birthYear)) {
        this.data[0].people.push(people);
        return;
      }
      if (people.birthYear < 20) {
        this.data[1].people.push(people);
        return;
      }
      if (people.birthYear >= 20 && people.birthYear < 40) {
        this.data[2].people.push(people);
        return;
      }
      if (people.birthYear >= 40 && people.birthYear < 60) {
        this.data[3].people.push(people);
        return;
      }
      if (people.birthYear >= 60 && people.birthYear < 80) {
        this.data[4].people.push(people);
        return;
      }
      if (people.birthYear >= 80 && people.birthYear < 100) {
        this.data[5].people.push(people);
        return;
      }
      if (people.birthYear >= 100) {
        this.data[6].people.push(people);
        return;
      }
    });
  }

}
