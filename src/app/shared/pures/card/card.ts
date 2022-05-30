import { Component, Input, OnInit } from '@angular/core';
import { post } from 'src/app/core/models/post';

@Component({
    selector: 'app-card',
    template: `
        <mat-card class="card">
        <mat-card-header>
            <div mat-card-avatar class="example-header-image"></div>
            <mat-card-title>{{post.title}}</mat-card-title>
            <mat-card-subtitle>{{post.subtitle}}</mat-card-subtitle>
        </mat-card-header>
        <img mat-card-image src={{post.url}} alt="Photo of a Shiba Inu">
        <mat-card-content>
            <p>
            {{post.text}}
            </p>
        </mat-card-content>
        <!-- <mat-card-actions>
            <button mat-button>LIKE</button>
            <button mat-button>SHARE</button>
        </mat-card-actions> -->
        </mat-card>
    `
})


export class Card implements OnInit {

    @Input() post!: post;

    constructor() { }

    ngOnInit() { }
}