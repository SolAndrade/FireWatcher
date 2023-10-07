import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMapComponent } from './Home/home-map/home-map.component';
import { HomeInfoComponent } from './Home/home-info/home-info.component';
import { HomeReportComponent } from './Home/home-report/home-report.component';
import { PopUpStartComponent } from './pop-up-start/pop-up-start.component';
import { PopUpReportComponent } from './Home/home-report/pop-up-report/pop-up-report.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMapComponent,
    HomeInfoComponent,
    HomeReportComponent,
    PopUpStartComponent,
    PopUpReportComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
