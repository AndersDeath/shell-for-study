import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeFlashcardsViewComponent } from './fake-flashcards-view.component';

describe('FakeFlashcardsViewComponent', () => {
  let component: FakeFlashcardsViewComponent;
  let fixture: ComponentFixture<FakeFlashcardsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FakeFlashcardsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FakeFlashcardsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
