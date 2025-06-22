import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {RouterLink, RouterModule} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";
import {AuthRouterComponent} from "./pages/auth-router/auth-router.component";
import { FormGenericComponent } from './components/form-generic/form-generic.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AuthRouterComponent,
        LoginComponent,
        RegisterComponent,
        FormGenericComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        AuthRoutingModule,
        RouterLink,
        ReactiveFormsModule
    ]
})
export class AuthModule {
}
