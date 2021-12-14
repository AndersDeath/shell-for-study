import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDictionaryPageComponent } from './free-dictionary-page.component';

describe('FreeDictionaryPageComponent', () => {
  let component: FreeDictionaryPageComponent;
  let fixture: ComponentFixture<FreeDictionaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDictionaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDictionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
