import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html'
})
export class BotoesComponent implements OnInit {

  @Input() valido: boolean;
  @Input() grupo: number;
  @Input() pageForm : FormGroup;

  constructor(private pageService : PageService) { }

  ngOnInit(): void {
  }

  gravar(){
    this.pageService.submit(this.pageForm, this.grupo)
  }

}
