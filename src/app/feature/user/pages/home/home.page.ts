import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post';
import { Sizer } from 'src/app/utils/screenSizer';
import { PostService } from 'src/app/core/services/post.service';


@Component({
  templateUrl: './home.page.html',

})
export class HomePage extends Sizer implements OnInit {
  
  posts?: IPost[]

  // posts = Posts;


  postId!: number;

  constructor(
    private postService: PostService, 
    sizer: BreakpointObserver,
  ) { 
    super(sizer);
  }

  ngOnInit() {
    this.fetchData()
  }

  fetchData(){ 
    this.postService.fetchPosts().subscribe(data => this.posts = data)

  }

}
