import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from '../models/post';

@Injectable({providedIn: 'root'})
export class PostService {
    private readonly baseUrl = '/assets';

    constructor(private http: HttpClient) { }
    
    fetchPost(): Observable<IPost[]>  {
        // return this.http.get<IPost>(`${this.baseUrl}/mocks/mockPosts.json/${postId}`);
        return this.http.get<IPost[]>(`${this.baseUrl}/mocks/mockPosts.json`);
    }

    fetchPosts(): Observable<IPost[]> {
        return this.http.get<IPost[]>(`${this.baseUrl}/mocks/mockPosts.json`);
    }
    
}




