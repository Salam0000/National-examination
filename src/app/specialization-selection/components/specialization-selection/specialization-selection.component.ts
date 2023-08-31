import { Component } from '@angular/core';
import { SpecializationSelectionService } from '../../services/specialization-selection.service';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';
import { ActivatedRoute, Router } from '@angular/router';
import { Classification } from 'src/app/models/classifications';
import { MatDialog } from '@angular/material/dialog';
import { PopUpClassificationComponent } from '../pop-up-classification/pop-up-classification.component';

@Component({
  selector: 'app-specialization-selection',
  templateUrl: './specialization-selection.component.html',
  styleUrls: ['./specialization-selection.component.css']
})
export class SpecializationSelectionComponent {
  constructor(private specializationSelectionService: SpecializationSelectionService, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) { }

  adverts: Advert[] = [];
  Classifications: Classification[] = [];
  isFetching: boolean = false;
  specializationId!: number;
  specializationType!: string;

  ngOnInit(): void {
    this.isFetching = true;
    // this.specializationId = this.route.snapshot.params['id'];c
    this.specializationType = this.route.snapshot.params['id'];
    this.specializationSelectionService.getAllAdverts().subscribe(
      (result: any) => {
        this.adverts = result.data.sliders;
      },
      (_) => {
        alert('الرجاء التحقق من سلامة الاتصال لديك');
      }
    );
    if (this.specializationType == 'master') {
      this.specializationSelectionService.getAllClassificationsMaster().subscribe(
        (result: any) => {
          this.Classifications = result.data.specializations;
          this.isFetching = false;
        },
        (_) => {
          alert('الرجاء التحقق من سلامة الاتصال لديك');
          this.isFetching = false;
        }
      );
    } else {
      this.specializationSelectionService.getAllClassificationsGraduate().subscribe(
        (result: any) => {
          this.Classifications = result.data.specializations;
          this.isFetching = false;
        },
        (_) => {
          alert('الرجاء التحقق من سلامة الاتصال لديك');
          this.isFetching = false;
        }
      );
    }
  }
  getTotalAdverts() {
    return this.adverts;
  }
  moveToDwrat() {
    this.router.navigate([`/QuizDwrat/دورات`]);
  }
  moveToQuizStart() {
    this.router.navigate(['QuizStart', { id: -1, type: "بنك الأسئلة" }]);
  }
  showPopUp(id: number) {
    this.dialog.open(PopUpClassificationComponent, {
      width: '50%',
      height: '60vh',
      data: { 'classification': id, 'master': this.specializationType }
    })
  }

}
