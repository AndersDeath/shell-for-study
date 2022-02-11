import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishDictionaryPageComponent } from './spanish-dictionary-page.component';

describe('SpanishDictionaryPageComponent', () => {
  let component: SpanishDictionaryPageComponent;
  let fixture: ComponentFixture<SpanishDictionaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishDictionaryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishDictionaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
