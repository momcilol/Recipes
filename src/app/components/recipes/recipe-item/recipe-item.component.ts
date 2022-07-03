import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/model/ComplexSearch/result';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  public recipe: Result;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seeDetails() {
    console.log("see details");
    this.router.navigate(["/recipe-detail", this.recipe.id]);
  }

}
