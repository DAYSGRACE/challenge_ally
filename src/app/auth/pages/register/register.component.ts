import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
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

    get mismatchPasswords() {
        return this.registerForm?.errors?.['passwordsMismatch'] && this.registerForm?.get('repeat_password')?.touched;
    }

    get errorClassInput() {
        return {
            'input-error': this.mismatchPasswords,
        }
    }

    ngOnInit() {
        this.registerForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            repeat_password: ['', Validators.required],
        }, {validators: this.matchesPasswords});
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

    private matchesPasswords(form: FormGroup) {
        const password = form.get('password')?.value;
        const repeatPassword = form.get('repeat_password')?.value;
        return password === repeatPassword ? null : {passwordsMismatch: true};
    }


}
