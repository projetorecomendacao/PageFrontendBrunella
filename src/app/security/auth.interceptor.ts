import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'angularx-social-login';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private accessToken: string = null;

  constructor(private injector: Injector) {
    injector.get(AuthService).authState.subscribe(data => {
      this.accessToken = data.authToken;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.accessToken != null) {
      const headers = new HttpHeaders({
        Authorization: `Bearer google-oauth2 ${this.accessToken}`
      });
      const authRequest = request.clone(
        { headers }
      );
      return next.handle(authRequest);
    } else {
      return next.handle(request);
    }
  }
}
