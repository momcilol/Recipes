import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/model/ComplexSearch/result';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipes: Result[];
  public diets: string[];

  constructor(private searchService: SearchService) {
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
    ];
    this.diets = [
      "Gluten Free", 
      "Ketogenic", 
      "Vegetarian", 
      "Lacto-Vegetarian", 
      "Ovo-Vegetarian", 
      "Vegan", 
      "Pescetarian", 
      "Paleo", 
      "Primal", 
      "Low FODMAP", 
      "Whole30"];
  }

  ngOnInit(): void {

  }

  search(searchForm: any) {
    this.searchService.complexSearchRecipes(searchForm.value.search["searchTerm"], searchForm.value.search["resultsNumber"]).subscribe(
      res => this.recipes = res.results
    )
  }

  formatLabel(value: number) {
    return value;
  }

}
