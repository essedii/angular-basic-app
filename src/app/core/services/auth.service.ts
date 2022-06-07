import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, first, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../models/user';

@Injectable({providedIn: 'root'})
export class AuthService {
    private readonly baseUrl =  '/assets/mocks/mockUsers.json'

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

    getCurrentUser() {
        return this.http
            .get<IUser>(`${this.baseUrl}`)       
    }

    
}