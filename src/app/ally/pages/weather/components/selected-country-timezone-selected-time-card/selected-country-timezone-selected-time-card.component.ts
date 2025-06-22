import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject, Subscription, takeUntil} from "rxjs";
import {CountryService} from "../../../../services/country.service";

@Component({
    selector: 'app-selected-country-timezone-selected-time-card',
    templateUrl: './selected-country-timezone-selected-time-card.component.html',
    styleUrls: ['./selected-country-timezone-selected-time-card.component.scss']
})
export class SelectedCountryTimezoneSelectedTimeCardComponent implements OnInit, OnDestroy {

    timezone: string | null = null;
    currentTime: string | null = null;

    private toDestroy$ = new Subject<void>();

    constructor(private countrySvc: CountryService) {
    }


    ngOnInit(): void {
        this.countrySvc.selectedTimezone$.pipe(takeUntil(this.toDestroy$)).subscribe((tz) => {
            this.timezone = tz;
            this.updateTime();
        });
        interval(1000).pipe(takeUntil(this.toDestroy$)).subscribe(() => {
            if (this.timezone) {
                this.updateTime();
            }
        });
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
        this.toDestroy$.next();
        this.toDestroy$.complete();
        this.toDestroy$.unsubscribe();
    }
}
