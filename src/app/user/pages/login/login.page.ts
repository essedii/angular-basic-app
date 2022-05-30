import { Component, OnInit } from '@angular/core';
import { ICredentials } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginDialog } from 'src/app/shared/dialogs/loginDialog/loginDialog';
import { MatDialog } from '@angular/material/dialog';


@Component({
  templateUrl: './login.page.html',
})
export class LoginPage implements OnInit {

  credentials: any;

  constructor(
    private authService: AuthService,
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
