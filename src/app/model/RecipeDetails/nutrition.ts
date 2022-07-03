import { CaloricBreakdown } from "./caloric-breakdown";
import { Nutrient } from "./nutrient";
import { WeightPerServing } from "./weight-per-serving";

export interface Nutrition {
    nutrients: Nutrient[];
    caloricBreakdown: CaloricBreakdown;
    weightPerServing: WeightPerServing;
}
