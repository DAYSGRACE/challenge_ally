import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGenericComponent } from './card-generic.component';

describe('CardGenericComponent', () => {
  let component: CardGenericComponent;
  let fixture: ComponentFixture<CardGenericComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardGenericComponent]
    });
    fixture = TestBed.createComponent(CardGenericComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
