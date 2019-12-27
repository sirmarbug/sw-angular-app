import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './core/services';
import { Person, Response, Result } from './core/models';
import { birthYearConvert, BMICalc, BMIType } from './shared/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  people: Array<Person> = new Array<Person>();

  constructor(
    private starWarsService: StarWarsService
  ) { }

  ngOnInit(): void {
    this.getData();
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
        }
      }
    );
  }

  private sortFunc(a: Person, b: Person) {
    return a.birthYear - b.birthYear;
  }
}
