import { Component, OnInit, Input } from '@angular/core';
import { Person, Response, Result, PersonGroup } from 'src/app/core/models';
import { StarWarsService } from 'src/app/core/services';
import { BMICalc, birthYearConvert, BMIType } from '../../utils';

@Component({
  selector: 'app-persons-timeline',
  templateUrl: './persons-timeline.component.html',
  styleUrls: ['./persons-timeline.component.scss']
})
export class PersonsTimelineComponent implements OnInit {

  people: Array<Person> = new Array<Person>();
  data: Array<PersonGroup>;
  loading = true;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.getData();
    this.groupInit();
  }

  private groupInit(): void {
    this.data = [
      new PersonGroup('0 - 20 BBY', new Array<Person>()),
      new PersonGroup('20 - 40 BBY', new Array<Person>()),
      new PersonGroup('40 - 60 BBY', new Array<Person>()),
      new PersonGroup('60 - 80 BBY', new Array<Person>()),
      new PersonGroup('80 - 100 BBY', new Array<Person>()),
      new PersonGroup('100 BBY++', new Array<Person>()),
      new PersonGroup('Unknown', new Array<Person>())
    ];
  }

  getData(url?: string): void {
    this.starWarsService.getData(url).subscribe(
      (res: Response) => {
        res.results.forEach((person: Result) => {
          const bmi = BMICalc(Number(person.height), Number(person.mass));
          const newPerson = new Person(person.name, birthYearConvert(person.birth_year),
          Number(person.height), Number(person.mass), bmi, BMIType(bmi));
          this.people.push(newPerson);
        });
        if (res.next) {
          this.getData(res.next);
        } else {
          this.people = this.people.sort(this.sortFunc);
          this.groupPeople();
          this.loading = false;
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
        this.data[6].people.push(people);
        return;
      }
      if (people.birthYear < 20) {
        this.data[0].people.push(people);
        return;
      }
      if (people.birthYear >= 20 && people.birthYear < 40) {
        this.data[1].people.push(people);
        return;
      }
      if (people.birthYear >= 40 && people.birthYear < 60) {
        this.data[2].people.push(people);
        return;
      }
      if (people.birthYear >= 60 && people.birthYear < 80) {
        this.data[3].people.push(people);
        return;
      }
      if (people.birthYear >= 80 && people.birthYear < 100) {
        this.data[4].people.push(people);
        return;
      }
      if (people.birthYear >= 100) {
        this.data[5].people.push(people);
        return;
      }
    });
  }

}
