import { Component, OnInit } from '@angular/core';
import { UserService } from '../security/user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent implements OnInit {

  /*
    User service is here because it needs to do the post request before loading the PAGE component.
    By including it here, that is guaranteed.
   */
  constructor(private userService: UserService) {}

  ngOnInit() {
  }

}
