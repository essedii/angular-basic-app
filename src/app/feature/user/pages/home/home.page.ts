import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post';
import { Sizer } from 'src/app/utils/screenSizer';
import { PostService } from 'src/app/core/services/post.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { IUser } from 'src/app/core/models/user';


@Component({
  templateUrl: './home.page.html',

})
export class HomePage extends Sizer implements OnInit {
  
  posts?: IPost[];
  users?: any;
  user?:IUser;
  isMobile = this.isMobile$;
  isGuest! :boolean;
  

  constructor(
    private postService: PostService, 
    private authService: AuthService,
    sizer: BreakpointObserver,
  ) { 
    super(sizer);
  }

  ngOnInit() {
    this.fetchData()
  }

  getType(type: string): boolean{
    if (type === 'admin' ){
      console.log('Is guest is', this.isGuest)
     
      return this.isGuest === false
      
    }
    if (type === 'user' ){
      console.log('Is guest is', this.isGuest)
      return this.isGuest === false
    }
    else {
      console.log('Is guest is', this.isGuest)
      return this.isGuest === true
    }

    }
    
    

  

  fetchData(){ 
    this.postService.fetchPosts().subscribe(
      data => {this.posts = data}
    )
    if (localStorage.getItem('token')){
      this.authService.getCurrentUser().subscribe(
        users => {
          this.users = users
            {
            let userId = localStorage.getItem('token')
            let filtered = this.users.filter((user: any) => user.id === userId )
            this.user = filtered[0]
            
            }
            if (!!this.user)
            {this.getType(this.user.accountType)}
           
          }

      )}
    }
  }

    