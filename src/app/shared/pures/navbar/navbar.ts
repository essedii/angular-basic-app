import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {

  @Input() isMobile?: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isMobile)
  }

}
