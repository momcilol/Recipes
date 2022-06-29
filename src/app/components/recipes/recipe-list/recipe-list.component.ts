import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/model/ComplexSearch/result';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipes: Result[];

  constructor() { 
    this.recipes = [
      {
          "id": 654959,
          "title": "Pasta With Tuna",
          "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 511728,
          "title": "Pasta Margherita",
          "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
          "imageType": "jpg"
      },
      {
          "id": 654812,
          "title": "Pasta and Seafood",
          "image": "https://spoonacular.com/recipeImages/654812-312x231.jpg",
          "imageType": "jpg"
      }
  ]
  }

  ngOnInit(): void {

  }

}
