import {Component, OnInit} from '@angular/core';
import {TodoService} from "../../../../services/todo.service";
import {TodoDTO} from "../../../../interfaces/todo.interface";

@Component({
    selector: 'app-list-todo-user-card',
    templateUrl: './list-todo-user-card.component.html',
    styleUrls: ['./list-todo-user-card.component.scss']
})
export class ListTodoUserCardComponent implements OnInit {

    isLoading: boolean = false;

    todos: TodoDTO[] = [];

    constructor(private todoSvc: TodoService) {
    }

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.isLoading = true;
        this.todoSvc.getAllTodos().subscribe({
            next: (data: TodoDTO[]) => {
                this.todos = data;
            },
            error: () => this.isLoading = false,
            complete: () => this.isLoading = false
        })
    }

}