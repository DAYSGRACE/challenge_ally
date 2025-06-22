import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCountryWeatherCardComponent } from './selected-country-weather-card.component';

describe('SelectedCountryWeatherCardComponent', () => {
  let component: SelectedCountryWeatherCardComponent;
  let fixture: ComponentFixture<SelectedCountryWeatherCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCountryWeatherCardComponent]
    });
    fixture = TestBed.createComponent(SelectedCountryWeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
