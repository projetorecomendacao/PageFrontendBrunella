import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../page/page.service';
import {Page} from '../../../shared/models/page.model';
import {DAOService} from '../../../shared/dao.service';
import {REST_URL_PAGE} from '../../../shared/REST_API_URLs';
import { PageGerador } from '../page/page.gerador';
import { UserService } from 'src/app/security/user.service';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html'
})
export class PagesListComponent implements OnInit {

  participantName : string;
  participantIdade : number;
  participantSexo : string;
  participantID : number;

  public pages: Page[] = new Array<Page>();

  constructor(private router: Router, private pageService: PageService, 
              private daoService: DAOService, private pageGerador : PageGerador, private userService: UserService) {
    //console.log (pageService.participant);
    //console.log (userService.getId());
   }

   public desenvolvedor(): boolean {
     return this.userService.getId() == 1;
   }

  ngOnInit() {
    this.participantID = this.pageService.participant.getId();
    this.participantName = this.pageService.participant.getName();
    this.participantIdade = this.pageService.participant.getAge();
    this.participantSexo = this.pageService.participant.getGender();

    this.daoService.getObjects(REST_URL_PAGE).subscribe( (response: any) => {
      for (const page of response) {
        if (page.participant == this.pageService.participant.getId()){
          this.pages.push(new Page(page));
          console.log(page);
        }
      }
    });
  }

  // Sets the page and redirects
  goTo(page: number) {
    //Inicializa o PAGe no page service
    this.pageService.reset();
    console.log(page);
    if (page != 0) {
        //se -1 será gerado um novo page preenchido outro valor alteração de um page 
        if (page == -1) {
          this.pageService.page = this.pageGerador.pegaPage(page,this.pageService.participant);
        } else {
          this.daoService.getObject(REST_URL_PAGE,page.toString()).subscribe(response =>{
            console.log(response);
          },error => {
            alert('Page não encontrado..');  
          });
          let lo_page = new Page ();
          this.pageService.page = lo_page;
        }
    }
    console.log(this.pageService.page);
    this.router.navigate(['private/participant/page/' + page.toString()]).then();
  }

  voltar(){
    this.router.navigate(['private/']).then();  
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
