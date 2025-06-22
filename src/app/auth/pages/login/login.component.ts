import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm!: FormGroup;

    showError = false;

    isLoading = false;

    constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });

    }

    sendForm() {
        this.isLoading = true;
        this.authenticationService.loginUser(this.loginForm.getRawValue()).subscribe({
            next: (res) => this.authenticationService.saveTokenAndRedirect(res),
            error: err => {
                this.showError = true;
                this.isLoading = false;
            },
            complete: () => this.isLoading = false
        })
    }

}
