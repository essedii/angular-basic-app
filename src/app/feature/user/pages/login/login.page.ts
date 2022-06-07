import { Component, OnInit } from '@angular/core';
import { LoginDialog } from 'src/app/shared/dialogs/loginDialog/loginDialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {

  credentials: any;

  constructor(
    public dialog: MatDialog ) { }
    

  ngOnInit(): void {
  }

  public openDialog(){
    this.dialog.open(LoginDialog)
    .afterClosed()
    .subscribe(formResult => {
      if (formResult) {
        console.log(formResult.value)
      }
    })
  }


}
