import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/MealPlan/getWeekPlan/item';
import { Value } from 'src/app/model/MealPlan/getWeekPlan/value';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input()
  public item: Item;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  seeDetails() {
    console.log("see details");
    this.router.navigate(["/recipe-detail", this.item.id]);
  }

}
