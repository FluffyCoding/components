import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PassengerDashboardModule} from "./passenger-dashboard/PassengerDashboardModule";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Angular Components
    BrowserModule,
    CommonModule,

    //Custom Components
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
