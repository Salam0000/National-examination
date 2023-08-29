import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-classification',
  templateUrl: './pop-up-classification.component.html',
  styleUrls: ['./pop-up-classification.component.css']
})
export class PopUpClassificationComponent {
  constructor(private dialog: MatDialog) { }
  closePopup() {
    this.dialog.closeAll();
  }
}
