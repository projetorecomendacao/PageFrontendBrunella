import { Component, OnInit } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_MULTIDISCIPLINARY_DOMAIN } from '../../../../shared/REST_API_URLs';
import { Falls, MultidisciplinaryDomain } from '../../../../shared/models/multidimentional-aspects';
import { PageService } from '../page.service';

@Component({
  selector: 'app-multidimensional-aspect',
  templateUrl: './multidimensional-aspect.component.html'
})
export class MultidimensionalAspectComponent implements OnInit {

  private multidisciplinaryDomain: MultidisciplinaryDomain;

  private falls: Falls;
  private comments_multi: string;

  constructor(private dao: DAOService, private pageService: PageService) { }

  ngOnInit() { }

  setFalls(f: Falls) { this.falls = f; this.submit(); }
  setComments(c: string) { this.comments_multi = c; this.submit(); }

  submit() {
    if (this.falls && this.comments_multi) this.dao.postObject(REST_URL_MULTIDISCIPLINARY_DOMAIN, {
      falls: this.falls.getId(),
      comments_multi: this.comments_multi
    }).subscribe(data => {
      this.multidisciplinaryDomain = new MultidisciplinaryDomain(data);
      this.pageService.setMultidisciplinaryDomain(this.multidisciplinaryDomain);
    });
  }
}
