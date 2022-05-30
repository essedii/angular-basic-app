import { Component, Input, OnInit } from '@angular/core';
import { LoginDialog } from '../../dialogs/loginDialog/loginDialog';
import { SignupDialog } from '../../dialogs/signuDialog/signupDialog';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
})
export class Navbar implements OnInit {

  @Input() isMobile?: boolean;
  @Input() isLogged?: boolean;

  constructor(
    public dialog: MatDialog 
  ) { }

  ngOnInit(): void {
    console.log(this.isMobile)
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
