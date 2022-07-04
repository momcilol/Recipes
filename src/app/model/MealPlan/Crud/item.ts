import { Value } from "./value";

export interface Item {
    id: number;
    slot: number;
    position: number;
    type: string;
    value: Value;
}
