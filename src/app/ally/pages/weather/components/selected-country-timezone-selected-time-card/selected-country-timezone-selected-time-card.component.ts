import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from "rxjs";
import {CountryService} from "../../../../services/country.service";

@Component({
    selector: 'app-selected-country-timezone-selected-time-card',
    templateUrl: './selected-country-timezone-selected-time-card.component.html',
    styleUrls: ['./selected-country-timezone-selected-time-card.component.scss']
})
export class SelectedCountryTimezoneSelectedTimeCardComponent implements OnInit, OnDestroy {

    timezone: string | null = null;
    currentTime: string | null = null;

    private sub = new Subscription();

    constructor(private countrySvc: CountryService) {
    }


    ngOnInit(): void {
        this.sub.add(
            this.countrySvc.selectedTimezone$.subscribe((tz) => {
                this.timezone = tz;
                this.updateTime();
            })
        );
        this.sub.add(
            interval(1000).subscribe(() => {
                if (this.timezone) {
                    this.updateTime();
                }
            })
        );
    }

    updateTime(): void {
        if (!this.timezone) return;
        const now = new Date();
        this.currentTime = now.toLocaleString('es-AR', {
            timeZone: this.timezone,
            hour12: true,
        });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
