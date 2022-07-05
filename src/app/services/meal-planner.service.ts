import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AddMeal } from '../model/MealPlan/AddMeal/add-meal';
import { GetWeekPlan } from '../model/MealPlan/getWeekPlan/get-week-plan';

@Injectable({
  providedIn: 'root'
})
export class MealPlannerService {

  private baseUrl = environment.baseUrl;
  private hash = localStorage.getItem("hash")!;

  constructor(private httpClient: HttpClient) { }

  getWeekPlan(monday: string): Observable<GetWeekPlan> {
    return this.httpClient.get<GetWeekPlan>(
      this.baseUrl + "/mealplanner/" + localStorage.getItem("username") + "/week/" + monday,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: { hash: this.hash }
      })
  }

  addMeal(meal: AddMeal): Observable<any> {
    return this.httpClient.post(this.baseUrl + "/mealplanner/" + localStorage.getItem("username") + "/items",
      meal,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        params: { hash: this.hash }
      }
    )
  }

}
