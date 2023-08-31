import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  closePopup() {
    this.dialog.closeAll();
  }
}
