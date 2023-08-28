import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpClassificationComponent } from './pop-up-classification.component';

describe('PopUpClassificationComponent', () => {
  let component: PopUpClassificationComponent;
  let fixture: ComponentFixture<PopUpClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpClassificationComponent]
    });
    fixture = TestBed.createComponent(PopUpClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
