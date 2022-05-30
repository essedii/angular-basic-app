import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICredentials } from 'src/app/core/models/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login-form',
    templateUrl: 'login-form.html'
})

export class LoginFormComponent implements OnInit {

    @Input() loginForm: FormGroup;
    @Output('onLoginClicked') createEmitter: EventEmitter<any> = new EventEmitter();


    constructor(fb: FormBuilder) {
        this.loginForm = fb.group({
            email: fb.control('', [Validators.required, Validators.email]),
            password: fb.control('', [Validators.required])
        })
    }

    ngOnInit() {}

    submitCredentials(loginForm: ICredentials){
        this.createEmitter.emit(loginForm);
    }
}