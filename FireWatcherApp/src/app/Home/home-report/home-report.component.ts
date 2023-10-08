import { Component } from '@angular/core';
import { PopUpReportComponent } from './pop-up-report/pop-up-report.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.css']
})
export class HomeReportComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(){ 
    const dialogRef = this.dialog.open(PopUpReportComponent, {
      width: '350px',
      height: '350px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.sendFireObservation()
      }
    });
  }

  sendFireObservation(){
  }
}
