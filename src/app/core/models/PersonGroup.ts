import { Person } from './person';
export class PersonGroup {
    constructor(
        public title: string,
        public people: Array<Person>
    ) {}
}
