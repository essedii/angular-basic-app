import { Component, Input, OnInit } from '@angular/core';
import { LoginDialog } from '../../dialogs/loginDialog/loginDialog';
import { SignupDialog } from '../../dialogs/signuDialog/signupDialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {

  @Input() isMobile?: boolean;
  @Input() user?: any;
  @Input() isPostPage?: boolean;
  @Input() isGuest?: boolean;


  constructor(
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log('IS A GUEST?',this.isGuest)
  }

  openLogin(){
    this.dialog.open(LoginDialog)
    .afterClosed()
    .subscribe(formResult => {
      if (formResult) {
        console.log(formResult.value)
      }
    })
  }
  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  openSignup(){
    this.dialog.open(SignupDialog)
    .afterClosed()
    .subscribe(formResult => {
      if (formResult) {
        console.log(formResult.value)
      }
    })
  }
}
