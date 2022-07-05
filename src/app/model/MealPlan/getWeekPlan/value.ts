import { Ingredient } from "./ingredient";

export interface Value {
    servings: number;
    id: number;
    title: string;
    imageType: string;
    image: string;
    ingredients: Ingredient[];
}
