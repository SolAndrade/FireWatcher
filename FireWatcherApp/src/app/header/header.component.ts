import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HelpDialogComponent } from './help-dialog/help-dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dialog: MatDialog) { }


  openDialog(){ 
    const dialogRef = this.dialog.open(HelpDialogComponent, {
      width: '250px',
      panelClass: 'centered-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Diálogo cerrado con resultado: ${result}`);
    });
  }
}
