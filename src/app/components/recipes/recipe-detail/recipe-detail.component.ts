import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { RecipeInformation } from 'src/app/model/RecipeDetails/recipe-information';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  private id: number;
  public recipeDetails: Observable<RecipeInformation>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.recipeDetails = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.searchService.recipeDetails(parseInt(params.get("id")!), true))
    )
  }



}
