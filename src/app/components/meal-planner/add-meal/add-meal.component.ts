import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddMeal } from 'src/app/model/MealPlan/AddMeal/add-meal';
import { MealPlannerService } from 'src/app/services/meal-planner.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  public meals = ['Breakfast', 'Lunch', 'Dinner'];
  constructor(
    public dialogRef: MatDialogRef<AddMealComponent>,
    @Inject(MAT_DIALOG_DATA) private meal: AddMeal, 
    private mealPlannerService: MealPlannerService) { }

  ngOnInit(): void {
  }

  addMeal(mealData: NgForm) {
    console.log(mealData.value["datePicker"]);
    // let month = mealData.value["datePicker"].slice(0,2);
    // let day = mealData.value["datePicker"].slice(3,5);
    // let year = mealData.value["datePicker"].slice(6,10);

    // let date = new Date(year, month, day);
    // this.meal.date = date.getMilliseconds()/1000;
    this.meal.date = mealData.value["datePicker"].getMilliseconds() / 1000;
    this.meal.slot = mealData.value["selectedMeal"];
    console.log(mealData.value["selectedMeal"]);
    
    this.mealPlannerService.addMeal(this.meal).subscribe((res) => {
      err: () => console.error("Greska");
    })

    this.dialogRef.close();
  }

}
