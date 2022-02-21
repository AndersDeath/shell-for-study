import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRestorePasswordComponent } from './user-restore-password.component';

describe('UserRestorePasswordComponent', () => {
  let component: UserRestorePasswordComponent;
  let fixture: ComponentFixture<UserRestorePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRestorePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRestorePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
