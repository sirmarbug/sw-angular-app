import { Component, OnInit } from '@angular/core';
import { StarWarsService } from './core/services';
import { Person, Response, Result } from './core/models';
import { birthYearConvert } from './shared/utils';

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
    this.getDate();
  }

  getDate(url?: string): void {
    this.starWarsService.getDate(url).subscribe(
      (res: Response) => {
        console.log(res);
        res.results.forEach((person: Result) => {
          this.people.push(new Person(person.name, birthYearConvert(person.birth_year), Number(person.height), Number(person.mass)));
        });
        if (res.next) {
          this.getDate(res.next);
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
