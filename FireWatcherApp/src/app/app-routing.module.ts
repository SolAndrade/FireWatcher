import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInfoComponent } from './Home/home-info/home-info.component';
import { HomeMapComponent } from './Home/home-map/home-map.component';
import { HomeReportComponent } from './Home/home-report/home-report.component';
import { PreventionComponent } from './Home/home-info/home-info-section/home-info-section-prevention/prevention.component';
import { HowToActComponent } from './Home/home-info/home-info-section/home-info-section-how_to_act/how-to-act.component';
import { FactorsComponent } from './Home/home-info/home-info-section/home-info-section-factors/factors.component';

const routes: Routes = [
  { path: '', component: HomeMapComponent },
  { path: 'map', component: HomeMapComponent },
  { path: 'info', component: HomeInfoComponent },
  { path: 'info/prevention', component: PreventionComponent },
  { path: 'info/how-to-act', component: HowToActComponent },
  { path: 'info/report', component: HomeReportComponent },
  { path: 'info/factors', component: FactorsComponent },
  { path: 'info', component: HomeInfoComponent },
  { path: 'report', component: HomeReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
