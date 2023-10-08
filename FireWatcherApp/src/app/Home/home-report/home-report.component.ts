import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-home-report',
  templateUrl: './home-report.component.html',
  styleUrls: ['./home-report.component.css']
})
export class HomeReportComponent {
  dialogRef: any = null;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {
  }


  openDialog(templateRef:any){ 
    this.dialogRef = this.dialog.open(templateRef, {
      width: '300px'
    });
  }
  
  onAccept(): void {
    // this.snackBar.open('Report sent', 'Close', {
    //   duration: 3000,
    // });
    this.sendFireObservation()
    this.dialogRef.close();
  }
  
  onCancel(): void {
    this.dialogRef.close();
  }

  sendFireObservation(){
  }
}
