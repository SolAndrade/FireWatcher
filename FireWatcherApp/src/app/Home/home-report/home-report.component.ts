import { Component } from '@angular/core';

@Component({
  selector: 'app-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.css']
})
export class HomeReportComponent {
  sendFireObservation(){
    if (window.confirm("Are you sure you want to report this fire?")) {
      
    }
  }
}
