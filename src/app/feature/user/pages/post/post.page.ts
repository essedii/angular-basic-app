import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { IPost } from 'src/app/core/models/post';
import { Sizer } from 'src/app/utils/screenSizer';

import { Posts } from 'src/app/mockPosts';

@Component({
    templateUrl: './post.page.html'
})

export class PostPage extends Sizer implements OnInit {

    post!:IPost;
    postId!: string;

    constructor(
      private route: ActivatedRoute,
        sizer: BreakpointObserver,
      ) { 
        super(sizer);
        this.route.params.subscribe(this.parseParams);
      }

      private parseParams = (params: Params) => {
        this.postId = params['id'];
        if (this.postId) {
          this.fetchData(this.postId)
        }
      }

    ngOnInit() {
     

     }
     private fetchData(postId: string) {
      // this.auth.getCurrentBizs().then((business) => {
      //   this.businessAccount = business[0];
      let post = Posts.filter(post => post.id ===postId)
      this.post = post[0]
      };
}