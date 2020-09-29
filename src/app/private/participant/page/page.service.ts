import { Injectable } from '@angular/core';
import { Page } from '../../../shared/models/page.model';
import { Participant} from '../../../shared/models/participant.model';
import { REST_URL_PAGE} from '../../../shared/REST_API_URLs';
import { DAOService } from '../../../shared/dao.service';
import { UserService } from '../../../security/user.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageService {
  //participante
  private _participant: Participant;

  //especialista
  private _geronto : number;

  //page
  private _page = new Page();

  get page() { return this._page; }

  set page(page: Page) { this._page = page; }

  get participant() { return this._participant; }
  
  set participant(p: Participant) { this._participant = p; }

  get geronto() {return this._geronto;}

  set geronto(geronto : number) { this.geronto = geronto;}

  get hasService() { return !!this.page.getService(); }
  get hasEntrance() { return !!this.page.getEntrance(); }

  constructor(private dao: DAOService, private userService: UserService, private router: Router) { }

  reset() {
    this.page.setId(-1);
  }

    
  //Método que é utilizado para gravar o page
  submit(pageForm: FormGroup, grupo?:number) {
    // O grupo 0 é o botão do cabeça page.. quando grava a primeira vez atualiza o id do PAGE
    if (grupo == 0){
      if (this._page.getId() == -1){
        this.dao.postObject(REST_URL_PAGE,pageForm.get('cabecaPageForm').value).subscribe((data:any)=>{
          this._page.setId(data.id);
          console.log(data);
        });
      } else {
        this.dao.putObject(REST_URL_PAGE,pageForm.get('cabecaPageForm').value, this.page.getId().toString()).subscribe((data:any)=>{
          console.log(data);
        });
      }   
    } else {
      //quando o grupo é 10 é pq finalizou, manda gravar tudo..
      if (grupo == 10) {
        this.dao.putObject(REST_URL_PAGE,pageForm.value, this.page.getId().toString()).subscribe((data:any)=>{
          console.log(data);
          alert('PAGe salvo com sucesso!!');
          this.router.navigate(['private/']).then();          
        },error => {
          alert('Erro na gravação..');  
        });   
      } else {
        // cada botão de avançar grava um pedaço do page.. o controle dos ids é feito no backend
        let url_ = [
          'participantFormForm',
          'psychologicalAspectsForm',
          'biologicalAspectsForm',
          'socialAspectsForm',
          'multidimensionalAspectsForm',
          'demandMapForm'
        ]
        this.dao.putObject(REST_URL_PAGE,pageForm.get(url_[grupo-1]).value, this.page.getId().toString()).subscribe((data:any)=>{
          console.log(data)            
        });   
      }
    }
  }
}