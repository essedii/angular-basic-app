import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Sizer } from 'src/app/utils/screenSizer';
import { Posts } from 'src/app/mockPosts';

@Component({
  templateUrl: './home.page.html',

})
export class HomePage extends Sizer implements OnInit {

  posts = Posts;

  constructor(
    sizer: BreakpointObserver,
  ) { 
    super(sizer);
  }

  ngOnInit() {
  }

}
