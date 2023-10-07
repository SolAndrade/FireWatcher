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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeInfoSectionComponent } from './Home/home-info/home-info-section/home-info-section.component';
import { PreventionComponent } from './Home/home-info/home-info-section/home-info-section-prevention/prevention.component';
import { HowToActComponent } from './Home/home-info/home-info-section/home-info-section-how_to_act/how-to-act.component';
import { FactorsComponent } from './Home/home-info/home-info-section/home-info-section-factors/factors.component';
import { ReportComponent } from './Home/home-info/home-info-section/home-info-section-report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMapComponent,
    HomeInfoComponent,
    HomeReportComponent,
    PopUpStartComponent,
    PopUpReportComponent,
    HeaderComponent,
    NavbarComponent,
    HomeInfoSectionComponent,
    PreventionComponent,
    ReportComponent,
    HowToActComponent,
    FactorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
