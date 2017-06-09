import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-itinerary',
  templateUrl: './create-itinerary.component.html',
  styleUrls: ['./create-itinerary.component.css']
})
export class CreateItineraryComponent implements OnInit {

  days: number[];

  constructor() {
    this.days = [
      1, 2, 3, 4
    ];
  }

  ngOnInit() {
  }

  addDay() {
    let currentDay = this.days.pop();
    this.days.push(currentDay);
    this.days.push(currentDay + 1);
    console.log("Day added");
  }

  removeLastDay() {
    this.days.pop();
    console.log("Day remove");
  }

}
