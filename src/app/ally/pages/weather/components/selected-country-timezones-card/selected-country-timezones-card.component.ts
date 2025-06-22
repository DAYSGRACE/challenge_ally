import {Component, OnInit} from '@angular/core';
import {CountryDTO} from "../../../../interfaces/country.interface";
import {CountryService} from "../../../../services/country.service";

@Component({
    selector: 'app-selected-country-timezones-card',
    templateUrl: './selected-country-timezones-card.component.html',
    styleUrls: ['./selected-country-timezones-card.component.scss']
})
export class SelectedCountryTimezonesCardComponent implements OnInit {
    selectedCountry!: CountryDTO | null;

    constructor(private countrySvc: CountryService) {
    }

    ngOnInit(): void {
        this.countrySvc.selectedCountry$.subscribe((country) => {
            this.selectedCountry = country;
        });
    }

    selectTimezone(timezone: string): void {
        this.countrySvc.setSelectedTimezone(timezone);
    }
}
