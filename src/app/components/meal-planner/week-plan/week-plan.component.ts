import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GetWeekPlan } from 'src/app/model/MealPlan/Crud/get-week-plan';
import { MealPlannerService } from 'src/app/services/meal-planner.service';

@Component({
  selector: 'app-week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.scss']
})
export class WeekPlanComponent implements OnInit {

  public today: Date;
  public monday: Date;
  public weekTitle: string;
  public daysNumbers: number[] = [0, 1, 2, 3, 4, 5, 6];
  public weekDaysNames: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  public thisWeek: boolean;

  public weekPlan: GetWeekPlan;

  public meals: string[] = ["Breakfast", "Lunch", "Dinner"];

  constructor(private mealPlannerService: MealPlannerService) { }

  ngOnInit(): void {
    this.today = new Date();
    console.log(this.today);
    this.monday = new Date();
    this.monday.setMilliseconds(this.today.getMilliseconds() - ((this.today.getDay() - 1) % 7) * 24 * 60 * 60 * 1000);
    this.updateWeekTitle();
  }

  loadWeekPlan() {
    const datepipe: DatePipe = new DatePipe('en-US');
    let formattedDate = datepipe.transform(this.monday, 'yyyy-MM-dd');
    console.log(formattedDate);

    this.mealPlannerService.getWeekPlan(formattedDate!).subscribe({
      next: (res) => { this.weekPlan = res },
      error: () => { console.log("Error week plan") }
    })
  }


  nextWeek() {
    this.monday.setMilliseconds(this.monday.getMilliseconds() + 7 * 24 * 60 * 60 * 1000);
    this.updateWeekTitle();
    this.loadWeekPlan()
  }

  previousWeek() {
    this.monday.setMilliseconds(this.monday.getMilliseconds() - 7 * 24 * 60 * 60 * 1000);
    this.updateWeekTitle();
    this.loadWeekPlan();
  }

  intToOrdinal(num: number): string {
    num = Math.round(num);
    let numString = num.toString();

    if (Math.floor(num / 10) % 10 === 1) {
      return numString + "th";
    }

    switch (num % 10) {
      case 1: return numString + "st";
      case 2: return numString + "nd";
      case 3: return numString + "rd";
      default: return numString + "th";
    }
  }

  getMonthName(month: number) {
    const d = new Date();
    d.setMonth(month);
    const monthName = d.toLocaleString("default", { month: "long" });
    return monthName;
  }

  updateWeekTitle() {
    console.log(this.monday);
    let sunday = new Date();
    sunday.setMilliseconds(this.monday.getMilliseconds() + 6 * 24 * 60 * 60 * 1000);
    console.log(sunday);

    this.weekTitle = this.getMonthName(this.monday.getMonth()) + " " + this.intToOrdinal(this.monday.getDate())
      + " - " + this.getMonthName(sunday.getMonth()) + " " + this.intToOrdinal(sunday.getDate());

    this.isThisWeek();
  }

  isToday(day: number): boolean {
    return this.monday.getMilliseconds() + day * 24 * 60 * 60 * 1000 == this.today.getMilliseconds();
  }

  isThisWeek() {
    this.thisWeek = this.monday.getMilliseconds() <= this.today.getMilliseconds() &&
      this.today.getMilliseconds() <= this.monday.getMilliseconds() + 6 * 24 * 60 * 60 * 1000;
  }


  hasMeal(i: number, d: number): boolean {
    console.log(i + ", " + d);
    
    if (this.weekPlan && this.weekPlan.days && this.weekPlan.days[d] && this.weekPlan.days[d].items.find((item) => item.slot == i + 1))
      return true;
    return false;
  }
}
