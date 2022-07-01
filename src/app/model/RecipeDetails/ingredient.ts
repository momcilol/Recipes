import { Nutrient } from "./nutrient";

export interface Ingredient {
    id: number;
    name: string;
    amount: number;
    unit: string;
    nutrients: Nutrient[];
}
