import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecipeInformation } from 'src/app/model/RecipeDetails/recipe-information';
import { SearchService } from 'src/app/services/search.service';
import * as recipeInf from 'src/app/components/recipes/recipe-detail/templete.json';
import { EquipmentComponent } from './equipment/equipment.component';
import { Step } from 'src/app/model/RecipeDetails/step';
import { Observable, timeout } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  private id: number;
  public recipeDetailsObservable: Observable<RecipeInformation>;
  public summary: HTMLElement;
  // public steps: Step[];


  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
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




}
