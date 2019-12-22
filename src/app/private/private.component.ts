import { Component, OnInit } from '@angular/core';
import { UserService } from '../security/user.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent implements OnInit {

  /*
    User service is here because it needs to be instantiated before loading the PAGE component.
    By including it here, that is guaranteed. DO NOT REMOVE.
   */
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
