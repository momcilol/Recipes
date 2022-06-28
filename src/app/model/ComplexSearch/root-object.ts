import { Result } from "./result";

export interface RootObject {
    results: Result[];
    offset: number;
    number: number;
    totalResults: number;
}
