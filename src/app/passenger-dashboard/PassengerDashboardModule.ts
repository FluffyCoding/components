import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
//Container
import {PassengerDashboardComponent} from "./containers/pasanger-dashboard/passanger-dashboard.componenet";

//Components
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";

//Service
import {PassengerDashboardService} from "./passenger-dashboard.service";

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    PassengerDashboardComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})

export class PassengerDashboardModule {
}
