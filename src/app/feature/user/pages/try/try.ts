import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({

    template: `

    <div style="background-color: white;" class="mt-5 mx-5 h-25 d-flex align-items-center">
    <div class="container d-flex justify-content-center ">
        <div class="d-flex flex-column ">
            <div>
                <p>Navigate as a: </p>
            </div>
            <div >
            <button class="btn btn-danger me-1" type="button" (click)="setId('')">Guest</button>
            <button class="btn btn-primary me-1" type="button" (click)="setId('1')">User</button>
            <button class="btn btn-success me-1" type="button" (click)="setId('2')">Admin</button>
          
            </div>
        </div>
       
    </div>
    </div>
    
`
})

export class TryPage implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    setId(id?:any){
        localStorage.setItem('token', id)
        console.log('token', localStorage.getItem('token'))
        this.router.navigate(['/home'])
    }

}