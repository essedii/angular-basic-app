import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
    selector: 'app-signup-form',
    templateUrl: 'signup-form.html'
})

export class SignupFormComponent implements OnInit {

    @Input() signupForm:any;
    @Output('onSignupClicked') createEmitter: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    submitCredentials(signupForm: any){
        this.createEmitter.emit(signupForm);
    }
}