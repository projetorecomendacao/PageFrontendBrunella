import { Component, Input,  OnInit} from '@angular/core';
import {Participant} from '../../../shared/models/participant.model';
import { DAOService } from '../../../shared/dao.service';
import { PageService } from './page.service';
import { PageForm } from './page.form';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {

  get page() { return this.pageService.page; }


  constructor(private dao: DAOService, private pageService: PageService, private pf: PageForm) { }

  pageForm : FormGroup;
  participant : Participant;

  ngOnInit(): void {
    this.participant = this.pageService.participant;
    this.pageForm = this.pf.geraFormGroup();
  }
}
