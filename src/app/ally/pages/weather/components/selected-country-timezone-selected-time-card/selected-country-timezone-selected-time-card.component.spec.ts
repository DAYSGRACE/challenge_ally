import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCountryTimezoneSelectedTimeCardComponent } from './selected-country-timezone-selected-time-card.component';

describe('SelectedCountryTimezoneSelectedTimeCardComponent', () => {
  let component: SelectedCountryTimezoneSelectedTimeCardComponent;
  let fixture: ComponentFixture<SelectedCountryTimezoneSelectedTimeCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCountryTimezoneSelectedTimeCardComponent]
    });
    fixture = TestBed.createComponent(SelectedCountryTimezoneSelectedTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
