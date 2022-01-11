import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeDictionaryComponent } from './free-dictionary.component';

describe('FreeDictionaryComponent', () => {
  let component: FreeDictionaryComponent;
  let fixture: ComponentFixture<FreeDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeDictionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
