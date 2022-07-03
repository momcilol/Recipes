import { Component, Input, OnInit } from '@angular/core';
import { Ingredient2 } from 'src/app/model/RecipeDetails/ingredient2';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {

  @Input()
  public ingredient2: Ingredient2;
  @Input()
  public imageBase: string;

  constructor() { }

  ngOnInit(): void {
  }

  image(): string {
    return this.imageBase + this.ingredient2.image;
  }

}
