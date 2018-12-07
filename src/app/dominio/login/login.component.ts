import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser, FacebookLoginProvider } from 'ng4-social-login';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  public user: any = SocialUser;
  constructor(private socialAuthService: AuthService) { }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.user = userData;
    });
  }


  ngOnInit() {
  }

}
