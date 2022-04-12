import {Component, OnInit} from "@angular/core";
import {Passengers} from "../../models/Passengers";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.css'],
  templateUrl: './passenger-dashboard.html',

})
export class PassengerDashboardComponent implements OnInit {

  public flightPassengers: Passengers[];

  constructor() {
  }


  ngOnInit(): void {
    this.flightPassengers = [{
      id: 1,
      fullName: "Jhon Green",
      checkedIn: true,
      checkedInDate: 1490742000000,
      children: null
    },
      {
        id: 2,
        fullName: "Mycroft Green",
        checkedIn: true,
        checkedInDate: 1491646000000,
        children: [{name: "Subhan", age: 4}, {name: "Namal", age: 6}]
      },
      {
        id: 3,
        fullName: "Tim Brown Br.",
        checkedIn: false,
        children: null
      }]
  }

  handleRemove(event: Passengers) {
    this.flightPassengers = this.flightPassengers.filter(
      (passenger: Passengers) => {
        return passenger.id != event.id;
      });
  }

  handleEdit(event: Passengers) {
    this.flightPassengers = this.flightPassengers.map((passenger: Passengers) => {
      if (passenger.id == event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
    console.log(this.flightPassengers)
  }
}
