import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerComponent } from './banner.component';
import { DebugElement } from '@angular/core';

describe('BannerComponent (minimal)', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
    });

    const fixture = TestBed.createComponent(BannerComponent);
    const component = fixture.componentInstance;

    expect(component).toBeDefined();
  });
});

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Test Banner"', () => {
    fixture.detectChanges();

    const bannerElement: HTMLElement = fixture.nativeElement;

    expect(bannerElement.textContent).toContain('Test Banner');
  });

  it('should have <h1> with "Test Banner"', () => {
    fixture.detectChanges();

    const bannerElement: HTMLElement = fixture.nativeElement;

    const p = bannerElement.querySelector('h1');

    expect(p.textContent.trim()).toEqual('Test Banner');
  });

  it('should have <h1> with "Test Banner"', () => {
    fixture.detectChanges();

    const bannerDebugElement: DebugElement = fixture.debugElement;
    const bannerElement: HTMLElement = bannerDebugElement.nativeElement;

    const p = bannerElement.querySelector('h1');

    expect(p.textContent.trim()).toEqual('Test Banner');
  });

  it('should have <h1> with "Test Title"', () => {
    fixture.detectChanges();

    component.title = 'Test Title';

    fixture.detectChanges();

    const bannerElement: HTMLElement = fixture.nativeElement;

    const p = bannerElement.querySelector('h1');

    expect(p.textContent.trim()).toEqual('Test Title');
  });
});
