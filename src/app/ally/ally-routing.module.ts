import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent, NavLink} from "./pages/home/home.component";
import {WeatherComponent} from "./pages/weather/weather.component";
import {UsersComponent} from "./pages/users/users.component";

const routes: Routes = [
        {
            path: '',
            component: HomeComponent,
            children: [
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'weather'
                },
                {
                    path: 'users',
                    component: UsersComponent,
                },
                {
                    path: 'weather',
                    component: WeatherComponent,
                },
            ]
        },
    ]
;

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AllyRoutingModule {
}
