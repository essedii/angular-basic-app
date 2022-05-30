import { Component, OnInit, Input } from '@angular/core';
import { IPost } from 'src/app/core/models/post';

@Component({
    selector: 'app-post-detail',
    templateUrl: 'post-detail.html'
})

export class PostDetail implements OnInit {

    @Input() post!: IPost;

    constructor() { }

    ngOnInit() { }
}