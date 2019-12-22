import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../page/page.service';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html'
})
export class PagesListComponent implements OnInit {

  constructor(private router: Router, private pageService: PageService) { }

  ngOnInit() {
  }

  goToPage(id: number = -1) {
    if (id === -1) {
      this.pageService.setParticipant();
      this.router.navigate(['private/participant/page/' + id.toString()]).then();
    }
  }

}
