import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RootObject } from '../model/ComplexSearch/root-object';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = environment.baseUrl;
  private apiKey = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  complexSearchRecipes(searchTerm: string, resultsNumber: number): Observable<RootObject> {
    return this.httpClient.get<RootObject>(this.baseUrl + '/recipes/complexSearch', {
      params: {
        apiKey: this.apiKey, 
        query: searchTerm,
        number: resultsNumber
      }
    }).pipe(
       tap(console.log)
    )
  }
}
