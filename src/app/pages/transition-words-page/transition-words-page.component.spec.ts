import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionWordsPageComponent } from './transition-words-page.component';

describe('TransitionWordsPageComponent', () => {
  let component: TransitionWordsPageComponent;
  let fixture: ComponentFixture<TransitionWordsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionWordsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionWordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
