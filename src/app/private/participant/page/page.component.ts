import { Component, Input,  OnInit} from '@angular/core';
import {Participant} from '../../../shared/models/participant.model';
import { DAOService } from '../../../shared/dao.service';
import { PageService } from './page.service';
import { PageForm } from './page.form';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  isOptional : boolean;

  get page() { return this.pageService.page; }


  constructor(private dao: DAOService, private pageService: PageService, private pf: PageForm, private router: Router) { }

  pageForm : FormGroup;
  participant : Participant;

  ngOnInit(): void {
   this.participant = this.pageService.participant;
   if (this.pageService.page.getId() == -1){
      this.pageForm = this.pf.geraFormGroup();
   } else {
    this.pageForm = this.pf.geraFormGroup(this.pageService.page);
   }
   console.log(this.pageForm.valid);
   if (this.pageForm.valid) {
     console.log('valido');
     this.isOptional = true;
   } else {
     this.isOptional = false;
     console.log('valido');
   }

  }

  salvar(){
    this.pageService.submit(this.pageForm);    
    alert('PAGe salvo com sucesso!!');
    this.router.navigate(['private/']).then();
  }

  cancelar(){
    if (window.confirm("Confirma o cancelamento da edição do PAGe? As alterações realizadas serão descartadas."))
      this.router.navigate(['private/']).then();
  }
}
