import { Value } from "./value";

export interface AddMeal {
    date: number;
    slot: number;
    position: number;
    type: string;
    value: Value;
}
