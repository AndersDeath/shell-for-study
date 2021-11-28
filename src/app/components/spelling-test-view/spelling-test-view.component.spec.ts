import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellingTestViewComponent } from './spelling-test-view.component';

describe('SpellingTestViewComponent', () => {
  let component: SpellingTestViewComponent;
  let fixture: ComponentFixture<SpellingTestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpellingTestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellingTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
