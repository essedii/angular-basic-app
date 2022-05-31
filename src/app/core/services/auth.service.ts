import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthService {
    private readonly baseUrl = '';

    httpOptions: { headers: HttpHeaders} = {
        headers: new HttpHeaders({ 'Content-Type': 'Application/json' })
    }
    userId: any;
    isUserLoggedIn$ = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient, private router: Router) { }
    
    login(email: any, password: any){
        return this.http.post(`${this.baseUrl}/login`, { email, password}, this.httpOptions).subscribe()   
    }

    signup(user: any){
        return this.http.post(`${this.baseUrl}/siugnup`, user, this.httpOptions).subscribe()
    }
}