import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDictionaryPopupComponent } from './free-dictionary-popup.component';

describe('FreeDictionaryPopupComponent', () => {
  let component: FreeDictionaryPopupComponent;
  let fixture: ComponentFixture<FreeDictionaryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDictionaryPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDictionaryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
