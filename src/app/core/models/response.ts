import { Result } from './result';

export class Response {
    constructor(
        public count: number,
        public next: string,
        public previous: string,
        public results: Array<Result>
    ) {}
}
