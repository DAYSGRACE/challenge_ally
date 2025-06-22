import { Injectable } from '@angular/core';
import {TodoDTO} from "../interfaces/todo.interface";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_URL = environment.api_url + '/api/v1/todo';

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<TodoDTO[]> {
    const url = `${this.API_URL}/list`;
    return this.http.get<TodoDTO[]>(url);
  }

}
