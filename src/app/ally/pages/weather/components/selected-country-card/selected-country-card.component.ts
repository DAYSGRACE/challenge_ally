import {Component, OnInit} from '@angular/core';
import {WeatherSummary} from "../../../../interfaces/weather.interface";
import {WeatherService} from "../../../../services/weather.service";
import {Subject, takeUntil} from "rxjs";


@Component({
    selector: 'app-selected-country-card',
    templateUrl: './selected-country-card.component.html',
    styleUrls: ['./selected-country-card.component.scss']
})
export class SelectedCountryCardComponent implements OnInit {

    isLoading: boolean = false;

    countryInfo!: WeatherSummary;

    toDestroy$: Subject<void> = new Subject<void>();

    constructor(private weatherService: WeatherService) {
    }

    ngOnInit() {
        this.weatherService.currentCountryInfo$.pipe(takeUntil(this.toDestroy$)).subscribe({
            next: data => {
                if (data) {
                    this.countryInfo = data;
                }
            },
        })
    }

    ngOnDestroy() {
        this.toDestroy$.next();
        this.toDestroy$.complete();
        this.toDestroy$.unsubscribe();
    }


}