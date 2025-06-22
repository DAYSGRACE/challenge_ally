import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {PaginationRequest, PaginationResponse} from "../../shared/interfaces/generic.interface";
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


  API_URL = 'http://localhost:8080/api/users';
  W_API_URL = '';

  constructor(private readonly httpClient: HttpClient) {
  }




}


