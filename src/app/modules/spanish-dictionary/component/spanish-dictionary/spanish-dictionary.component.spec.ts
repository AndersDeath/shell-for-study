import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishDictionaryComponent } from './spanish-dictionary.component';

describe('SpanishDictionaryComponent', () => {
  let component: SpanishDictionaryComponent;
  let fixture: ComponentFixture<SpanishDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishDictionaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
