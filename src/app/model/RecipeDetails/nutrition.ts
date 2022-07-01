import { CaloricBreakdown } from "./caloric-breakdown";
import { Ingredient } from "./ingredient";
import { Nutrient } from "./nutrient";
import { Property } from "./property";
import { WeightPerServing } from "./weight-per-serving";

export interface Nutrition {
    nutrients: Nutrient[];
    properties: Property[];
    flavonoids: Property[];
    ingredients: Ingredient[];
    caloricBreakdown: CaloricBreakdown;
    weightPerServing: WeightPerServing;
}
