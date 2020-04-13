import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeComponent } from './welcome.component';
import { UserService } from '../user.service';

class MockUserService {
  isLoggedIn = true;
  user = { name: 'Test User' };
}

const userServiceStub: Partial<UserService> = {
  isLoggedIn: true,
  user: { name: 'Test User' },
};

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userService: UserService ;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        // { provide: UserService, useClass: MockUserService },
        { provide: UserService, useValue: userServiceStub },
      ],
      declarations: [ WelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    userService = TestBed.inject(UserService); // 根注入器限定
    // userService = fixture.debugElement.injector.get(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have welcome message after construction', () => {
    expect(component.welcome).toBeUndefined();
  });

  it('should welcome logged in user after Angular calls ngOnInit', () => {
    component.ngOnInit();

    fixture.detectChanges();

    expect(component.welcome).toContain(userService.user.name);
  });

  it('should ask user to log in if not logged in after ngOnInit', () => {
    userService.isLoggedIn = false;

    component.ngOnInit();

    expect(component.welcome).not.toContain(userService.user.name);
    expect(component.welcome).toContain('log in');
  });

  it('stub object and injected UserService should not be the same', () => {
    expect(userServiceStub === userService).toBe(true);

    userServiceStub.isLoggedIn = false;
    expect(userService.isLoggedIn).toBe(false);
  });
});
