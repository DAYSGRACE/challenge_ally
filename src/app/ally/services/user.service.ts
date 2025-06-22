import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {delay, Observable, of} from "rxjs";
import {PaginationRequest, PaginationResponse} from "../../shared/interfaces/generic.interface";
import {UserInfo} from "../interfaces/user.interface";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API_URL = environment.api_url + '/users';

    constructor(private readonly httpClient: HttpClient) {
    }

    getListOfUsersPaginated(params: PaginationRequest): Observable<PaginationResponse<UserInfo>> {
        const url = `${this.API_URL}/list`;
        const httpParams = new HttpParams({
            fromObject: (params as any),
        });

        return this.httpClient.get<PaginationResponse<UserInfo>>(url, {
            params: httpParams,
        })

    }
}

