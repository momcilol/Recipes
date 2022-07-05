import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetWeekPlan } from '../model/MealPlan/getWeekPlan/get-week-plan';

@Injectable({
  providedIn: 'root'
})
export class MealPlannerService {

  private baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getWeekPlan(monday: string): Observable<GetWeekPlan> {
    let hash = localStorage.getItem("hash")!;
    return this.httpClient.get<GetWeekPlan>(
      this.baseUrl + "/mealplanner/" + localStorage.getItem("username") + "/week/" + monday,
      {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
        params: {hash: hash}
    })
}

}
