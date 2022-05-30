import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface SignupDialogData {
    email: string;
    password: string;
}

@Component({
    templateUrl: 'signupDialog.html'
})


export class SignupDialog {

    signupForm: FormGroup;
    constructor(private fb: FormBuilder,
        private dialogRef: MatDialogRef<SignupDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        
     ) {
        this.signupForm = this.fb.group({
            email: fb.control('', [Validators.required, Validators.email]),
            password: fb.control('', [Validators.required])
        })
     }
     
    close(){
        this.dialogRef.close()
    }

    continue(){
        this.dialogRef.close(this.signupForm)  
    }
}