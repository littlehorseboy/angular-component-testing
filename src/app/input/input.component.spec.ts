import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert hero name to Title Case', () => {
    const hostElement = fixture.nativeElement;
    const nameInput: HTMLInputElement = hostElement.querySelector('[data-testid=input]');
    const nameDisplay: HTMLElement = hostElement.querySelector('[data-testid=span]');

    nameInput.value = 'Quick BROWN';

    nameInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(fixture.componentInstance.name).toBe('Quick BROWN');
    expect(nameDisplay.textContent).toBe('Quick BROWN');
  });
});
