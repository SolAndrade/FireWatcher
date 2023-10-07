import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMapComponent } from './home-map/home-map.component';
import { HomeInfoComponent } from './home-info/home-info.component';
import { HomeReportComponent } from './home-report/home-report.component';
import { PopUpStartComponent } from './pop-up-start/pop-up-start.component';
import { PopUpReportComponent } from './pop-up-report/pop-up-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMapComponent,
    HomeInfoComponent,
    HomeReportComponent,
    PopUpStartComponent,
    PopUpReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
