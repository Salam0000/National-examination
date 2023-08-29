import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up-classification',
  templateUrl: './pop-up-classification.component.html',
  styleUrls: ['./pop-up-classification.component.css']
})
export class PopUpClassificationComponent {
  id!: number;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private router: Router,) { }

  ngOnInit() {
    this.id = this.data.id;
  }
  closePopup() {
    this.dialog.closeAll();
  }
  moveToDwrat() {
    this.router.navigate([`/QuizDwrat/${this.id}`]);
    this.closePopup();
  }
  moveToQuizStart() {
    this.router.navigate(['QuizStart', { id: this.id, type: "أسئلة الكتاب" }]);
    this.closePopup();
  }
}
