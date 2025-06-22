import {Component, OnDestroy, OnInit} from '@angular/core';
import {WeatherService} from "../../../../services/weather.service";
import {CountryService} from "../../../../services/country.service";
import {Subject, takeUntil} from "rxjs";
import {WeatherSummary} from "../../../../interfaces/weather.interface";

@Component({
    selector: 'app-selected-country-weather-card',
    templateUrl: './selected-country-weather-card.component.html',
    styleUrls: ['./selected-country-weather-card.component.scss']
})
export class SelectedCountryWeatherCardComponent implements OnInit, OnDestroy {

    private readonly toDestroy$: Subject<void> = new Subject();

    weatherSummary!: WeatherSummary;

    isLoading = false;

    constructor(private weatherService: WeatherService, private countriesSvc: CountryService) {
    }

    ngOnInit(): void {
        this.countriesSvc.selectedCountry$.pipe(takeUntil(this.toDestroy$)).subscribe(country => {
            const selected = country?.capital ? country : null;
            if (selected) {
                this.isLoading = true;
                this.weatherService.getSummaryByCountry(selected).subscribe({
                    next: data => this.weatherSummary = data,
                    error: err => this.isLoading = false,
                    complete: () => this.isLoading = false
                });
            }
        });
    }

    ngOnDestroy(): void {
        this.toDestroy$.complete();
        this.toDestroy$.unsubscribe();
    }
}
