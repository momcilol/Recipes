import { Meal } from "./meal";
import { Nutrients } from "./nutrients";

export interface Day {
    meals: Meal[];
    nutrients: Nutrients;
}
