import {Component} from '@angular/core';
import {CountryWeatherApi} from "../../../../interfaces/weather.interface";

@Component({
    selector: 'app-selected-country-card',
    templateUrl: './selected-country-card.component.html',
    styleUrls: ['./selected-country-card.component.scss']
})
export class SelectedCountryCardComponent {

    isLoading: boolean = true;

    country!: CountryWeatherApi;


}