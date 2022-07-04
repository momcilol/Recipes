import { Item } from "./item";
import { NutritionSummary } from "./nutrition-summary";

export interface Day {
    nutritionSummary: NutritionSummary;
    nutritionSummaryBreakfast: NutritionSummary;
    nutritionSummaryLunch: NutritionSummary;
    nutritionSummaryDinner: NutritionSummary;
    date: number;
    day: string;
    items: Item[];
}
