import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-report',
  templateUrl: './pop-up-report.component.html',
  styleUrls: ['./pop-up-report.component.css']
})
export class PopUpReportComponent {
    constructor(private dialogRef: MatDialogRef<PopUpReportComponent>) { }
  
    onDialogClose(): void {
      this.dialogRef.close();
    }
    
    onAccept(): void {
      this.dialogRef.close(true); // Puedes pasar true para indicar que se aceptó el diálogo.
    }
  
    onCancel(): void {
      this.dialogRef.close(false); // Puedes pasar false para indicar que se canceló el diálogo.
    }
  }
  