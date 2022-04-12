import {Component, Input} from "@angular/core";
import {Passengers} from "../../models/Passengers";

@Component({
  selector: 'passenger-count',
  template: '<h3>Airline Passenger!</h3>' +
    '<div class="badge badge-success shadow mt-3 mb-3 p-2 font-weight-bold">Total Passengers Checked In: {{passengerCheckedIn()}} / {{ items?.length }}</div>'
})

export class PassengerCountComponent {
  @Input()
  items: Passengers[];

  passengerCheckedIn(): number {
    if (!this.items) return;
    return this.items.filter(p => p.checkedIn).length;
  }

}
