import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../../../services/country.service";
import {CountryDTO} from "../../../../interfaces/country.interface";

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

    countries: CountryDTO[] = [];

    isLoading: boolean = false;

    constructor(private countrySvc: CountryService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this.countrySvc.getRandomCountries().subscribe({
            next: data => this.countries = data,
            error: err => this.isLoading = false,
            complete: () => this.isLoading = false,
        })
    }

    selectCountry(country: CountryDTO): void {
        this.countrySvc.setSelectedCountry(country);
    }
}
