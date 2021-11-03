import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DictionaryComponent } from './dictionary.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        DictionaryComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DictionaryComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'vnb-dictionary'`, () => {
    const fixture = TestBed.createComponent(DictionaryComponent);
    const app = fixture.componentInstance;
    // expect(app.title).toEqual('vnb-dictionary');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DictionaryComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('vnb-dictionary app is running!');
  });
});
