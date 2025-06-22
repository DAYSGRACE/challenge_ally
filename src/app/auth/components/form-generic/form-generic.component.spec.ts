import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGenericComponent } from './form-generic.component';

describe('FormGenericComponent', () => {
  let component: FormGenericComponent;
  let fixture: ComponentFixture<FormGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormGenericComponent]
    });
    fixture = TestBed.createComponent(FormGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
