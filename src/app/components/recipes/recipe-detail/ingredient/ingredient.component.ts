import { Component, Input, OnInit } from '@angular/core';
import { ExtendedIngredient } from 'src/app/model/RecipeDetails/extended-ingredient';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input()
  public ingredient: ExtendedIngredient;

  private imageBase: string = "https://spoonacular.com/cdn/ingredients_100x100/";

  constructor() { }

  ngOnInit(): void {
  }

  image(): string {
    return this.imageBase + this.ingredient.image;
  }


}
