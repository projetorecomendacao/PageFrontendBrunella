import { Component, OnInit } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import {AuthGuard} from '../auth.guard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private authGuard: AuthGuard) { }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      userData => {
        this.authGuard.setCanLoad(true);
        this.router.navigate(['/private']);
      },
      rejection => {
        this.authGuard.setCanLoad(false);
        console.error(rejection);
      }
    );
  }
}
