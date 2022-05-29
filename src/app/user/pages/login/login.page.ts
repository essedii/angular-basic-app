import { Component, OnInit } from '@angular/core';
import { ICredentials } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { BasicDialog } from 'src/app/shared/dialogs/basicDialog';
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

  login(credentials: ICredentials){
    console.log(credentials.email)
    // this.authService.login(this.credentials.email, this.credentials.password)
  }

  openDialog(){
    this.dialog.open(BasicDialog)
  }

}
