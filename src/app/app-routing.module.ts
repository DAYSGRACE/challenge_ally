import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthRoutes} from "./auth/auth.routes";
import {AllyRoutes} from "./ally/ally.routes";
import {isAuthenticatedForLoadModule, isNotAuthenticatedForLoadModule} from "./auth/services/auth.guard";

const routes: Routes = [
        {
            path: '',
            pathMatch: 'full',
            redirectTo:
            AllyRoutes.ROUTES.Home.path,
        },
        {
            path: AllyRoutes.ROUTES.Home.path,
            loadChildren:
                () => import('./ally/ally.module').then(m => m.AllyModule),
            canMatch: [isAuthenticatedForLoadModule]
        },
        {
            path: AuthRoutes.ROUTES.Auth.path,
            loadChildren:
                () => import('./auth/auth.module').then((m) => m.AuthModule),
            canMatch: [isNotAuthenticatedForLoadModule]
        }
        ,
        {
            path: '**',
            redirectTo:
            AuthRoutes.ROUTES.Auth.path,
        }
    ]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
