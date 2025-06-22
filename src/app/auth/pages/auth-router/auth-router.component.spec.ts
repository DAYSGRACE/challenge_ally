import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRouterComponent } from './auth-router.component';

describe('AuthRouterComponent', () => {
  let component: AuthRouterComponent;
  let fixture: ComponentFixture<AuthRouterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthRouterComponent]
    });
    fixture = TestBed.createComponent(AuthRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
