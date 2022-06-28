import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/model/ComplexSearch/result';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input()
  public recipe: Result;

  constructor() { }

  ngOnInit(): void {
  }

}
