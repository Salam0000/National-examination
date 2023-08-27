import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizDwratComponent } from './quiz-dwrat.component';

describe('QuizDwratComponent', () => {
  let component: QuizDwratComponent;
  let fixture: ComponentFixture<QuizDwratComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuizDwratComponent]
    });
    fixture = TestBed.createComponent(QuizDwratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
