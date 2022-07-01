import { Ingredient2 } from "./ingredient2";

export interface Step {
    number: number;
    step: string;
    ingredients: Ingredient2[];
    equipment: Ingredient2[];
}
