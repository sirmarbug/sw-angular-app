import { Person } from './person';

export class GroupPerson {
    constructor(
        public title: string,
        public people: Array<Person>
    ) {}
}
