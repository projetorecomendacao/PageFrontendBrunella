import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html'
})
export class BotoesComponent implements OnInit {

  @Input() valido: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
