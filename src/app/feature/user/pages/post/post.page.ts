import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IPost } from 'src/app/core/models/post';
import { PostService } from 'src/app/core/services/post.service';
import { Sizer } from 'src/app/utils/screenSizer';

@Component({
  templateUrl: './post.page.html',
})
export class PostPage extends Sizer implements OnInit {
  post?: IPost;
  posts?: IPost[];
  postId?: string;
  users?: any;
  user?: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    sizer: BreakpointObserver
  ) {
    super(sizer);
    this.route.params.subscribe(this.parseParams);
  }

  private parseParams = (params: Params) => {
    this.postId = params['id'];
    if (this.postId) {
      this.fetchData(this.postId);
    }
  };

  ngOnInit() {}

  fetchData(postId: string) {
    this.postService.fetchPosts().subscribe((data) => {
      this.posts = data;
      let posts = this.posts;
      let filtered = posts.filter((post) => post.id === postId);
      this.post = filtered[0];
    });
  }
}
