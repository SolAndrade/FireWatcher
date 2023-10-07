import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInfoComponent } from './Home/home-info/home-info.component';
import { HomeMapComponent } from './Home/home-map/home-map.component';
import { HomeReportComponent } from './Home/home-report/home-report.component';

const routes: Routes = [
  { path: '', component: HomeMapComponent },
  { path: 'map', component: HomeMapComponent },
  { path: 'info', component: HomeInfoComponent },
  { path: 'report', component: HomeReportComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
