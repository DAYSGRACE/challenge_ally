import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCountryTimezonesCardComponent } from './selected-country-timezones-card.component';

describe('SelectedCountryTimezonesCardComponent', () => {
  let component: SelectedCountryTimezonesCardComponent;
  let fixture: ComponentFixture<SelectedCountryTimezonesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCountryTimezonesCardComponent]
    });
    fixture = TestBed.createComponent(SelectedCountryTimezonesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
