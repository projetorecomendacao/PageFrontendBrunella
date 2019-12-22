import { Component, OnInit } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import {REST_URL_MULTIDISCIPLINARY_DOMAIN, REST_URL_PSYCHOLOGICAL_ASPECTS} from '../../../../shared/REST_API_URLs';
import { Falls, MultidisciplinaryDomain } from '../../../../shared/models/multidimentional-aspects';
import { PageService } from '../page.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-multidimensional-aspect',
  templateUrl: './multidimensional-aspect.component.html'
})
export class MultidimensionalAspectComponent implements OnInit {

  private multidisciplinaryDomain: MultidisciplinaryDomain;

  private falls: Falls;
  private comments_multi: string;

  get isComplete() { return this.falls && this.comments_multi; }

  constructor(private dao: DAOService, private pageService: PageService, private router: Router) { }

  ngOnInit() {
    this.multidisciplinaryDomain = this.pageService.multidisciplinaryDomain;
    if (this.multidisciplinaryDomain) {
      this.falls = this.multidisciplinaryDomain.fallsInstance;

      this.comments_multi = this.multidisciplinaryDomain.comments;
    }}

  setFalls(f: Falls) { if (this.multidisciplinaryDomain) this.multidisciplinaryDomain.fallsInstance = f; this.falls = f; }
  setComments(c: string) {
    if (this.multidisciplinaryDomain) {
      this.dao.patchObject(REST_URL_MULTIDISCIPLINARY_DOMAIN, {
        id: this.multidisciplinaryDomain.getId(),
        comments_multi: c
      }).subscribe((data: any) => {
        this.multidisciplinaryDomain.comments = data.comments_multi;
        this.comments_multi = data.comments_multi;
      }, _ => alert('Ocorreu um erro ao tentar alterar os comentários dos aspectos psicológicos'));
    } else this.comments_multi = c;
  }

  submit() {
    if (!this.pageService.hasService) {
      alert('É necessário especificar um serviço/instituição (no início da página)');
      return;
    }
    if (!this.pageService.hasEntrance) {
      alert('É necessário especificar uma data de entrada (no início da página)');
      return;
    }

    if (!this.multidisciplinaryDomain) {
      if (this.isComplete) this.dao.postObject(REST_URL_MULTIDISCIPLINARY_DOMAIN, {
        falls: this.falls.getId(),
        comments_multi: this.comments_multi
      }).subscribe(data => {
        this.multidisciplinaryDomain = new MultidisciplinaryDomain(data, this.falls);
        this.pageService.setMultidisciplinaryDomain(this.multidisciplinaryDomain);
      });
      else alert('Alguma das areas está incorreta');
    }

    this.router.navigate(['/private']).then();
  }
}
