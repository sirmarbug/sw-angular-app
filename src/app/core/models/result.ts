export class Result {
    constructor(
        public birth_year: string,
        public created: string,
        public edited: string,
        public eye_color: string,
        public films: Array<string>,
        public gender: string,
        public hair_color: string,
        public height: string,
        public homeworld: string,
        public mass: string,
        public name: string,
        public species: Array<string>,
        public starships: Array<string>,
        public url: string,
        public vehicles: Array<string>
    ) {}
}
