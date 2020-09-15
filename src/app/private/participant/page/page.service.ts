import { Injectable } from '@angular/core';
import { Page } from '../../../shared/models/page.model';
import { Participant} from '../../../shared/models/participant.model';
import { REST_URL_PAGE, 
         REST_URL_COGNITION_DEFICIT, 
         REST_URL_PSYCHOLOGICAL_ASPECTS,
         REST_URL_DEPRESSION,
         REST_URL_NEGATIVE_ATTITUDE_AGING} from '../../../shared/REST_API_URLs';
import { DAOService } from '../../../shared/dao.service';
import { UserService } from '../../../security/user.service';
import { FormGroup } from '@angular/forms';

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

  constructor(private dao: DAOService, private userService: UserService) { }

  reset() {
    this.page.setId(-1);
  }

  

  
  //Método que é utilizado para gravar o page
  submit(pageForm: FormGroup) {
    pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q31_stress_illness_hospitalization').enable;
    pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q32_bmi_less22').enable;
    
    pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q41_bmi_obesity').enable;
    
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q87_falls_last_year').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q88_fractures_due_to_falls').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q92_older_than75').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q93_female').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q95_av_ds_commitment').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q96_visual_deficit').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q97_domestic_risks').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q98_behavior_risk').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q99_inactivity').enable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q100_prior_ave').enable;

    

    //Quando o page tem o ID maior que zero é um update, caso contrário é um novo page
    if (this.page.getId() > 0){
      
    } else {
      console.log('passou')
      console.log(pageForm.value);
      this.dao.postObject(REST_URL_PAGE,pageForm.value).subscribe((data:any)=>{
        console.log(data);
      });

    }
    
    pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q31_stress_illness_hospitalization').disable;
    pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q32_bmi_less22').disable;

    pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q41_bmi_obesity').disable;

    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q87_falls_last_year').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q88_fractures_due_to_falls').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q92_older_than75').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q93_female').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q95_av_ds_commitment').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q96_visual_deficit').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q97_domestic_risks').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q98_behavior_risk').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q99_inactivity').disable;
    pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('q100_prior_ave').disable;

  }
}