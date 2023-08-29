import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent {
  expnlation!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) { }

  ngOnInit() {
    // will log the entire data object
    this.expnlation = this.data.reference;
    console.log(this.data.reference);
  }
  closePopup() {
    this.dialog.closeAll();
  }
}
