import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
  @ Input() valido : boolean;
  @ Input() errado : boolean;
  @ Input() branco : boolean;

  constructor() { }

  ngOnInit(): void {

  }

}
