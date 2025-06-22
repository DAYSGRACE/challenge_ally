import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./pages/home/home.component";
import {AllyRoutingModule} from "./ally-routing.module";
import {RouterModule} from "@angular/router";
import {WeatherComponent} from './pages/weather/weather.component';
import {UsersComponent} from './pages/users/users.component';
import {TableGenericComponent} from './components/table-generic/table-generic.component';
import {CardGenericComponent} from './components/card-generic/card-generic.component';
import {
    SelectedCountryCardComponent
} from './pages/weather/components/selected-country-card/selected-country-card.component';
import {
    SelectedCountryWeatherCardComponent
} from './pages/weather/components/selected-country-weather-card/selected-country-weather-card.component';
import {ListTodoUserCardComponent} from './pages/weather/components/list-todo-user-card/list-todo-user-card.component';
import {
    SelectedCountryTimezonesCardComponent
} from './pages/weather/components/selected-country-timezones-card/selected-country-timezones-card.component';
import {
    SelectedCountryTimezoneSelectedTimeCardComponent
} from './pages/weather/components/selected-country-timezone-selected-time-card/selected-country-timezone-selected-time-card.component';
import { DateOffSetPipe } from './pipes/date-off-set.pipe';
import { CountriesComponent } from './pages/weather/components/countries/countries.component';


@NgModule({
    declarations: [
        HomeComponent,
        WeatherComponent,
        UsersComponent,
        TableGenericComponent,
        CardGenericComponent,
        SelectedCountryCardComponent,
        SelectedCountryWeatherCardComponent,
        ListTodoUserCardComponent,
        SelectedCountryTimezonesCardComponent,
        SelectedCountryTimezoneSelectedTimeCardComponent,
        DateOffSetPipe,
        CountriesComponent
    ],
    imports: [
        CommonModule,
        AllyRoutingModule,
        RouterModule,
    ]
})
export class AllyModule {
}
