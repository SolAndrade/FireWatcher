import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInfoComponent } from './Home/home-info/home-info.component';
import { HomeMapComponent } from './Home/home-map/home-map.component';
import { HomeReportComponent } from './Home/home-report/home-report.component';
import { InfoPreventionComponent } from './Home/home-info/home-info-section/home-info-section-prevention/prevention.component';
import { InfoFactorsComponent } from './Home/home-info/home-info-section/home-info-section-factors/factors.component';
import { InfoReportComponent } from './Home/home-info/home-info-section/home-info-section-report/report.component';
import { InfoHowToActComponent } from './Home/home-info/home-info-section/home-info-section-how_to_act/how-to-act.component';

const routes: Routes = [
  { path: '', component: HomeMapComponent },
  { path: 'map', component: HomeMapComponent },
  { path: 'info', component: HomeInfoComponent },
  { path: 'info/prevention', component: InfoPreventionComponent },
  { path: 'info/how-to-act', component: InfoHowToActComponent },
  { path: 'info/report', component: InfoReportComponent },
  { path: 'info/factors', component: InfoFactorsComponent },
  { path: 'info', component: HomeInfoComponent },
  { path: 'report', component: HomeReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
