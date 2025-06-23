import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {CountryDTO} from "../interfaces/country.interface";
import {environment} from "../../../environments/environment";
import {WeatherResponse, WeatherSummary} from "../interfaces/weather.interface";

@Injectable({
    providedIn: 'root'
})
export class WeatherService {

    private currentCountryInfo = new BehaviorSubject<WeatherSummary | null>(null);

    currentCountryInfo$: Observable<WeatherSummary | null> = this.currentCountryInfo.asObservable();

    WEATHER_API_URL = 'https://api.weatherapi.com/v1/current.json';

    constructor(private readonly httpClient: HttpClient) {
    }

    setCurrentCountry(country: WeatherSummary) {
        this.currentCountryInfo.next(country);
    }

    getSummaryByCountry(country: CountryDTO): Observable<WeatherSummary> {
        const params: HttpParams = new HttpParams({
            fromObject: {
                q: country.capital,
                key: environment.apiKeyWeatherApi,
            }
        });
        return this.httpClient.get<WeatherResponse>(this.WEATHER_API_URL, {params}).pipe(
            map((value) => {
                const result: WeatherSummary = {
                    temperatureInC: value.current.temp_c + '° C',
                    conditionText: value.current.condition.text,
                    conditionIcon: value.current.condition.icon,
                    country: value.location.country,
                    capital: value.location.name,
                    lat: value.location.lat,
                    lon: value.location.lon,
                    region: value.location.region
                };
                this.setCurrentCountry(result);
                return result;
            }));
    }
}