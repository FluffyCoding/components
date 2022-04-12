import {Component, OnChanges, OnInit} from "@angular/core";
import {Passengers} from "../../models/Passengers";
import {PassengerDashboardService} from "../../passenger-dashboard.service";

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.css'],
  templateUrl: './passenger-dashboard.html',

})
export class PassengerDashboardComponent implements OnInit {

  public flightPassengers: Passengers[];

  constructor(private passengerService: PassengerDashboardService) {
  }


  ngOnInit(): void {

    this.passengerService.getPassengerApi()
      .subscribe((data:Passengers[])=>  {
        this.flightPassengers = data
      });
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
    // console.log(this.flightPassengers)
  }
}
