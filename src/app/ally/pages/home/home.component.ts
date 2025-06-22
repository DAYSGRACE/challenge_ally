import {Component} from '@angular/core';
import {AllyRoutes} from "../../ally.routes";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    navLinks: NavLink[] = [
        {name: 'Weather', path: AllyRoutes.ROUTES.Weather.path},
        {name: 'Users', path: AllyRoutes.ROUTES.Users.path},
    ];
}


export interface NavLink {
    path: string;
    name: string;
}