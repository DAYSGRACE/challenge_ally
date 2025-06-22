import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCountryCardComponent } from './selected-country-card.component';

describe('SelectedCountryCardComponent', () => {
  let component: SelectedCountryCardComponent;
  let fixture: ComponentFixture<SelectedCountryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedCountryCardComponent]
    });
    fixture = TestBed.createComponent(SelectedCountryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
