import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-week-plan',
  templateUrl: './week-plan.component.html',
  styleUrls: ['./week-plan.component.scss']
})
export class WeekPlanComponent implements OnInit {

  public today: Date;
  public monday: Date;
  public weekTitle: string;
  public days: number[] = [0, 1, 2, 3, 4, 5, 6];
  public weekDaysNames: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  public thisWeek: boolean;

  public meals: string[] = ["Breakfast", "Lunch", "Dinner"];

  constructor() {
    this.today = new Date();
    console.log(this.today);
    this.monday = new Date();
    this.monday.setMilliseconds(this.today.getMilliseconds() - ((this.today.getDay() - 1) % 7) * 24 * 60 * 60 * 1000);
    this.updateWeekTitle();
  }

  ngOnInit(): void {
  }

  nextWeek() {
    this.monday.setMilliseconds(this.monday.getMilliseconds() + 7 * 24 * 60 * 60 * 1000);
    this.updateWeekTitle();
  }

  previousWeek() {
    this.monday.setMilliseconds(this.monday.getMilliseconds() - 7 * 24 * 60 * 60 * 1000);
    this.updateWeekTitle();
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


}
