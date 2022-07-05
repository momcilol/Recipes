import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecipeInformation } from 'src/app/model/RecipeDetails/recipe-information';
import { SearchService } from 'src/app/services/search.service';
import * as recipeInf from 'src/app/components/recipes/recipe-detail/templete.json';
import { EquipmentComponent } from './equipment/equipment.component';
import { Step } from 'src/app/model/RecipeDetails/step';
import { Observable, timeout } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddMealComponent } from '../../meal-planner/add-meal/add-meal.component';
import { Value } from 'src/app/model/MealPlan/AddMeal/value';
import { AddMeal } from 'src/app/model/MealPlan/AddMeal/add-meal';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  public recipeDetailsObservable: Observable<RecipeInformation>;
  public recipeDetails: RecipeInformation; 
  public summary: HTMLElement;
  // public steps: Step[];


  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    public dialog: MatDialog
  ) {
    // this.recipeDetails = recipeInf;
    // this.steps = this.recipeDetails.analyzedInstructions[0].steps;
    console.log("Im here");
    console.log(this.route.snapshot.paramMap.get('id')!);
    console.log("Route: " + this.route);
    console.log("Param map: " + this.route.paramMap);
    this.route.paramMap.subscribe(
      (params) => this.recipeDetailsObservable = this.searchService.recipeDetails(parseInt(params.get('id')!), true)
    );
    console.log("after");

    this.recipeDetailsObservable.subscribe((res) => this.recipeDetails = res);
    // timeout(3000);
    // this.steps = this.recipeDetails.analyzedInstructions[0].steps;
    
    // console.log(this.steps);

  }

  ngOnInit(): void {
    
  }

  getSteps(recipeInformation :RecipeInformation): Step[] {
    return recipeInformation.analyzedInstructions.find(
      (inst) => {
        if (inst.steps && inst.steps.length > 0)
          return true;
        return false;
      })!.steps;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("username") && localStorage.getItem("hash") ? true : false;
  }

  addMeal() {
    let value: Value = {
      id: this.recipeDetails.id,
      servings: 1,
      title: this.recipeDetails.title,
      imageType: this.recipeDetails.imageType
    }
    let meal: AddMeal = {
      date: 0,
      slot: 0,
      position: 0,
      type: "RECIPE",
      value: value
    }
    
    this.dialog.open(AddMealComponent, {data: meal}).disableClose = true;

  }
  

}
