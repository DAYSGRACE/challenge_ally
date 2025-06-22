import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {CountryDTO} from "../interfaces/country.interface";

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private selectedCountrySubject = new BehaviorSubject<CountryDTO | null>(null);

    private selectedTimezoneSubject = new BehaviorSubject<string | null>(null);

    API_URL = 'http://localhost:8104/ally/api/v1/countries';

    selectedCountry$ = this.selectedCountrySubject.asObservable();

    selectedTimezone$ = this.selectedTimezoneSubject.asObservable();

    setSelectedCountry(country: CountryDTO): void {
        this.selectedCountrySubject.next(country);
    }

    constructor(private readonly httpClient: HttpClient) {
    }

    getRandomCountries(): Observable<CountryDTO[]> {
        const url = `${this.API_URL}/random`;
        return this.httpClient.get<CountryDTO[]>(url)
    }

    setSelectedTimezone(timezone: string) {
        this.selectedTimezoneSubject.next(timezone);
    }
}

