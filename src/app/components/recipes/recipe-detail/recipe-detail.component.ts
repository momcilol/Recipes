import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { RecipeInformation } from 'src/app/model/RecipeDetails/recipe-information';
import { SearchService } from 'src/app/services/search.service';
import * as recipeInf from 'src/app/components/recipes/recipe-detail/templete.json';
import { EquipmentComponent } from './equipment/equipment.component';
import { Step } from 'src/app/model/RecipeDetails/step';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  private id: number;
  public recipeDetails: RecipeInformation; 
  public summary: HTMLElement;
  public steps: Step[];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) {
    this.recipeDetails = recipeInf;
    this.steps = this.recipeDetails.analyzedInstructions[0].steps;
  }

  ngOnInit(): void {
    // console.log("Im here");
    // console.log(this.route.snapshot.paramMap.get('id')!);
    // console.log("Route: " + this.route);
    // console.log("Param map: " + this.route.paramMap);
    // this.route.paramMap.subscribe(
    //   (params) => this.searchService.recipeDetails(parseInt(params.get('id')!), true)
    //     .subscribe((res) => this.recipeDetails = res)
    // );
    // console.log("after");
  }





}
