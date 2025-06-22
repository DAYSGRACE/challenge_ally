import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    isLoading = false;

    showError = false;

    registerForm!: FormGroup;

    constructor(private authenticationService: AuthenticationService, private fb: FormBuilder) {
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            repeat_password: ['', Validators.required],
        });

    }

    sendForm() {
        this.isLoading = true;
        this.authenticationService.registerUser(this.registerForm.getRawValue()).subscribe({
            next: (res) => this.authenticationService.saveTokenAndRedirect(res),
            error: err => {
                this.showError = true;
                this.isLoading = false;
            },
            complete: () => this.isLoading = false
        })
    }


}
