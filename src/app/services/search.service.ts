import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, reduce, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from '../model/ComplexSearch/root-object';
import { RecipeInformation } from '../model/RecipeDetails/recipe-information';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey2;

  constructor(private httpClient: HttpClient) { }

  complexSearchRecipes(searchTerm: string, resultsNumber: number, diet: string, intolerances: string[], cuisines: string[]): Observable<RootObject> {
    let intolString = intolerances.join(",");
    let cuisString = intolerances.join(",");
    return this.httpClient.get<RootObject>(this.baseUrl + '/recipes/complexSearch', {
      params: {
        apiKey: this.apiKey, 
        query: searchTerm,
        number: resultsNumber,
        diet: diet,
        intolerances: intolString,
        cuisine: cuisString
      }
    }).pipe(
       tap(console.log)
    )
  }

  recipeDetails(id: number, includeNutrition: boolean): Observable<RecipeInformation> {
    return this.httpClient.get<RecipeInformation>(this.baseUrl + '/recipes/' + id + '/information', {
      params: {
        apiKey: this.apiKey,
        includeNutrition: includeNutrition
      }
    }
    
    )
  }
}
