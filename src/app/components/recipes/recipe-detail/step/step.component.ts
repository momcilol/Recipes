import { Component, Input, OnInit } from '@angular/core';
import { Step } from 'src/app/model/RecipeDetails/step';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  @Input()
  public step: Step;

  public ingredinetBase: string = "https://spoonacular.com/cdn/ingredients_100x100/";
  public equipmentBase: string = "https://spoonacular.com/cdn/equipment_100x100/";

  constructor() { }

  ngOnInit(): void {
  }


}
