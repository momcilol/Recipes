import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.scss']
})
export class AddMealComponent implements OnInit {

  public meals = ['Breakfast', 'Lunch', 'Dinner'];
  constructor() { }

  ngOnInit(): void {
  }

}
