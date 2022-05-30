import { Component, createPlatform, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface LoginDialogData {
    email: string;
    password: string;
}

@Component({
    templateUrl: 'loginDialog.html'
})

export class LoginDialog {

    loginForm: FormGroup;

   
    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<LoginDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        
     ) {
        this.loginForm = fb.group({
            email: fb.control('', [Validators.required, Validators.email]),
            password: fb.control('', [Validators.required])
        })
     }

    ngOnInit() { 
    }

    close(){
        this.dialogRef.close()
    }

    login(){
        this.dialogRef.close(this.loginForm)  
    }
}