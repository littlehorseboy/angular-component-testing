import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightswitchComponent } from './lightswitch.component';

describe('LightswitchComponent', () => {
  let component: LightswitchComponent;
  let fixture: ComponentFixture<LightswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('#clicked() should toggle #isOn', () => {
    expect(component.isOn).toBe(false, 'off at first');

    component.clicked();

    expect(component.isOn).toBe(true, 'on after click');

    component.clicked();

    expect(component.isOn).toBe(false, 'off after second click');
  });

  it ('#clicked() should set #message to "is on"', () => {
    expect(component.message).toMatch(/is off/i, 'off at first');

    component.clicked();

    expect(component.message).toMatch(/is on/i, 'on after clicked');

    component.clicked();

    expect(component.message).toMatch(/is off/i, 'on after clicked');
  });
});
