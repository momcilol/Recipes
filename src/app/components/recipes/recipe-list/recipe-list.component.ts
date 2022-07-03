import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Result } from 'src/app/model/ComplexSearch/result';
import { SearchService } from 'src/app/services/search.service';
import { FormControl } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipes: Observable<Result[]>;
  public diets: string[];
  public cuisines: string[];
  public cuisCtrl: FormControl = new FormControl([]);
  public intolerances: string[];
  public intolCtrl: FormControl = new FormControl([]);

  constructor(private searchService: SearchService, private router: Router) {
    // this.recipes = [
    //   {
    //     "id": 654959,
    //     "title": "Pasta With Tuna",
    //     "image": "https://spoonacular.com/recipeImages/654959-312x231.jpg",
    //     "imageType": "jpg"
    //   },
    //   {
    //     "id": 511728,
    //     "title": "Pasta Margherita",
    //     "image": "https://spoonacular.com/recipeImages/511728-312x231.jpg",
    //     "imageType": "jpg"
    //   },
    //   {
    //     "id": 654812,
    //     "title": "Pasta and Seafood",
    //     "image": "https://spoonacular.com/recipeImages/654812-312x231.jpg",
    //     "imageType": "jpg"
    //   }
    // ];
  }

  ngOnInit(): void {
    this.diets = [
      "",
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
      "Whole30"
    ];
    this.cuisines = [
      "African",
      "American",
      "British",
      "Cajun",
      "Caribbean",
      "Chinese",
      "Eastern European",
      "European",
      "French",
      "German",
      "Greek",
      "Indian",
      "Irish",
      "Italian",
      "Japanese",
      "Jewish",
      "Korean",
      "Latin American",
      "Mediterranean",
      "Mexican",
      "Middle Eastern",
      "Nordic",
      "Southern",
      "Spanish",
      "Thai",
      "Vietnamese"
    ]

    this.intolerances = [
      "Dairy",
      "Egg",
      "Gluten",
      "Grain",
      "Peanut",
      "Seafood",
      "Sesame",
      "Shellfish",
      "Soy",
      "Sulfite",
      "Tree Nut",
      "Wheat"
    ]
  }

  search(searchForm: any) {
    console.log(this.intolCtrl.value);
    console.log(this.cuisCtrl.value);
    this.recipes = this.searchService.complexSearchRecipes(
      searchForm.value.search["searchTerm"],
      searchForm.value.search["resultsNumber"],
      searchForm.value.search["selectedDiet"],
      this.intolCtrl.value,
      this.cuisCtrl.value
    )
      .pipe(
        map((rootObject) => {
          return rootObject.results;
        })
      )
  }

  formatLabel(value: number) {
    return value;
  }

  

}
