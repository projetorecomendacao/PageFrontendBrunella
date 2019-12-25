import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../page/page.service';
import {Page} from '../../../shared/models/page.model';
import {DAOService} from '../../../shared/dao.service';
import {REST_URL_PAGE} from '../../../shared/REST_API_URLs';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html'
})
export class PagesListComponent implements OnInit {

  private pages: Page[] = new Array<Page>();

  constructor(private router: Router, private pageService: PageService, private daoService: DAOService) { }

  ngOnInit() {
    this.daoService.getObjects(REST_URL_PAGE).subscribe((response: any) => {
      for (const page of response) this.pages.push(new Page(page));
    });
  }

  // Sets the page and redirects
  goTo(page: any = { id: -1 }) {
    if (page.id === -1) {
      this.pageService.reset();
      this.pageService.setParticipant();
    } else this.pageService.page = page;

    this.router.navigate(['private/participant/page/' + page.id.toString()]).then();
  }

  // TODO - If the user clicks twice on the delete button, it returns deletes and returns error. It is interesting to disable the button while waiting for the response
  delete(id: number) {
    this.daoService.deleteObject(REST_URL_PAGE, id.toString()).subscribe(response => {
      const pageIndex = this.pages.findIndex(page => page.getId() === id);
      this.pages.splice(pageIndex, 1);
    }, error => {
      alert('erro ao deletar');
    });
  }

}
