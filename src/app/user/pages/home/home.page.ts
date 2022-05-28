import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Sizer } from 'src/app/utils/screenSizer';

@Component({
  templateUrl: './home.page.html',

})
export class HomePage extends Sizer implements OnInit {

  constructor(
    sizer: BreakpointObserver,
  ) { 
    super(sizer);
  }

  ngOnInit() {
  }

}
