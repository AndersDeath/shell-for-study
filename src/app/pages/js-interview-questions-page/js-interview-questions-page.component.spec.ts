import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsInterviewQuestionsPageComponent } from './js-interview-questions-page.component';

describe('JsInterviewQuestionsPageComponent', () => {
  let component: JsInterviewQuestionsPageComponent;
  let fixture: ComponentFixture<JsInterviewQuestionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsInterviewQuestionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsInterviewQuestionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
