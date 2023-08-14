import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationSelectionComponent } from './specialization-selection.component';

describe('SpecializationSelectionComponent', () => {
  let component: SpecializationSelectionComponent;
  let fixture: ComponentFixture<SpecializationSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecializationSelectionComponent]
    });
    fixture = TestBed.createComponent(SpecializationSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
