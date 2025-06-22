import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    API_URL = environment.api_url + '/api/v1/auth';

    constructor(
        private readonly httpClient: HttpClient,
        private router: Router
    ) {
    }

    loginUser(body: LoginInterface): Observable<AuthenticationResponse> {
        const url = `${this.API_URL}/login`;
        return this.httpClient.post<AuthenticationResponse>(url, body);
    }

    registerUser(body: RegisterInterface): Observable<AuthenticationResponse> {
        const url = `${this.API_URL}/register`;
        return this.httpClient.post<AuthenticationResponse>(url, body);
    }

    saveTokenAndRedirect(authentication: AuthenticationResponse): void {
        localStorage.setItem('token', authentication.token);
        this.router.navigate(['/home'])
    }
}


export interface LoginInterface {
    email: string;
    password: string;
}

export interface RegisterInterface {
    name: string;
    email: string;
    password: string;
}

// Válido para los 2 casos de arriba xd
export interface AuthenticationResponse {
    token: string;
}