import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  public sidebarState: number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeSidebarState() {
    this.sidebarState = 1;
    if (this.sidebarState === 0) setTimeout(handler => this.sidebarState = 2, 1000);
    else setTimeout(handler => this.sidebarState = 0, 1000);
  }
}
