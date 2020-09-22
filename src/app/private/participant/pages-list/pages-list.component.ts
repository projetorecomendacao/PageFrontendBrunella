import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PageService} from '../page/page.service';
import {Page} from '../../../shared/models/page.model';
import {DAOService} from '../../../shared/dao.service';
import {REST_URL_PAGE} from '../../../shared/REST_API_URLs';
import { PageGerador } from '../page/page.gerador';
import { UserService } from 'src/app/security/user.service';
import { CognitionDeficit, Depression, NegativeAttitudesAging, PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';
import { BiologicalAspects, CardiovascularFactors, FunctionalDisability, Malnutrition, MisuseMedications, SensoryDeficit } from 'src/app/shared/models/biological-aspects.model';
import { EnvironmentalProblems, LowSocialSupport, SocialAspects, Violence } from 'src/app/shared/models/social-aspects.model';
import { Falls, MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { ParticipantSituation } from 'src/app/shared/models/participant.model';
import { DemandMap } from 'src/app/shared/models/demand-map';

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
    console.log(`page: ${page}`)
    //Inicializa o PAGe no page service
    this.pageService.reset();
    console.log(page);
    if (page != 0) {
      //se -1 será gerado um novo page preenchido outro valor alteração de um page 
      if (page == -1) {
        this.pageService.page = this.pageGerador.pegaPage(page,this.pageService.participant);
        console.log(this.pageService.page);
        this.router.navigate(['private/participant/page/' + page.toString()]).then();
      } else {
        this.daoService.getObject(REST_URL_PAGE,page.toString()).subscribe((response : any)  =>{
          //monta os aspectos psicológicos do PAGe
          console.log(response)
          let psi = new PsychologicalAspects
          (
            response.psi, 
            new CognitionDeficit(response.cognitionDeficit), 
            new NegativeAttitudesAging(response.negativeAttitudesAging),
            new Depression(response.depression)
          )
          console.log(psi);
          //monta os aspectos biológicos do PAGe
          let bio = new BiologicalAspects
          (
            response.bio,
            new SensoryDeficit(response.sensoryDeficit),
            new FunctionalDisability(response.functionalDisability),
            new Malnutrition (response.malnutrition),
            new CardiovascularFactors (response.cardiovascularFactors),
            new MisuseMedications(response.misuseMedications)
          )
          //monta os aspectos sociais do PAGe
          let soc = new SocialAspects(
            response.soc,
            new LowSocialSupport(response.lowSocialSupport),
            new EnvironmentalProblems(response.environmentalProblems),
            new Violence(response.violence)
          )
          //monta os aspectos multidimensional do PAGe
          let mul = new MultidisciplinaryDomain
          (
            response.mul,
            new Falls(response.falls)
          )
          //cria o page
          let page_ = new Page
          (
            response.cabecaPage,
            this.pageService.participant,
            new ParticipantSituation (response.participanteSituation),
            psi, bio, soc, mul, new DemandMap(response.demandMap) 
          )
          //seta o page
          console.log(page_)
          this.pageService.page = page_;
          console.log(this.pageService.page);
          this.router.navigate(['private/participant/page/' + page.toString()]).then();
        },error => {
          alert('Page não encontrado..');  
          this.router.navigate(['private/']).then();
        });
      }
    } else {
      this.pageService.reset;
      this.router.navigate(['private/participant/page/' + page.toString()]).then();
    }
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
