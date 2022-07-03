import { AnalyzedInstruction } from "./analyzed-instruction";
import { ExtendedIngredient } from "./extended-ingredient";
import { Nutrition } from "./nutrition";

export interface RecipeInformation {
    preparationMinutes: number;
    cookingMinutes: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    image: string;
    imageType: string;
    nutrition: Nutrition;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
}
