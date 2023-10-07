import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-report',
  templateUrl: './pop-up-report.component.html',
  styleUrls: ['./pop-up-report.component.css']
})
export class PopUpReportComponent {
  constructor(private router: Router) {}

  onClickAccept(){
    alert("Report sent")
  }

  onClickCancel(){
    this.router.navigate(['/Home/home-info'])
  }
}
