import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTodoUserCardComponent } from './list-todo-user-card.component';

describe('ListTodoUserCardComponent', () => {
  let component: ListTodoUserCardComponent;
  let fixture: ComponentFixture<ListTodoUserCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTodoUserCardComponent]
    });
    fixture = TestBed.createComponent(ListTodoUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
