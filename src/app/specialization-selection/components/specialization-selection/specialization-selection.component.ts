import { Component } from '@angular/core';
import { SpecializationSelectionService } from '../../services/specialization-selection.service';
import { Advert } from 'src/app/models/advert';
import { Specialization } from 'src/app/models/specialization';

@Component({
  selector: 'app-specialization-selection',
  templateUrl: './specialization-selection.component.html',
  styleUrls: ['./specialization-selection.component.css']
})
export class SpecializationSelectionComponent {
  constructor(private specializationSelectionService: SpecializationSelectionService) { }

  adverts: Advert[] = [];
  specializations: Specialization[] = [];
  isFetching: boolean = false;

  ngOnInit(): void {
    this.isFetching = true;
    // this.specializationSelectionService.getAllAdverts().subscribe(
    //   (result) => {
    //     this.adverts = result;
    //     console.log(result);
    //     console.log(result[0].image);
    //   },
    //   (error) => {
    //     alert(error.message);
    //   }
    // );
    // this.specializationSelectionService.getAllSpecializations().subscribe(
    //   (result) => {
    //     this.specializations = result;
    //     console.log(result);
    //     console.log(result[0].image);
    //   },
    //   (error) => {
    //     alert(error.message);
    //   }
    // );
    this.isFetching = false;
  }

  getTotalAdverts() {
    return this.adverts;
  }
}
