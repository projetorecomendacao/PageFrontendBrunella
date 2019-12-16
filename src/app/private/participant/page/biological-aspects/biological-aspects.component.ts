import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import {REST_URL_BIOLOGICAL_ASPECTS, REST_URL_PSYCHOLOGICAL_ASPECTS} from '../../../../shared/REST_API_URLs';
import {
  BiologicalAspects,
  CardiovascularFactors,
  FunctionalDisability,
  Malnutrition, MisuseMedications,
  SensoryDeficit
} from '../../../../shared/models/biological-aspects.model';
import { PageService } from '../page.service';

@Component({
  selector: 'app-biological-aspects',
  templateUrl: './biological-aspects.component.html'
})
export class BiologicalAspectsComponent implements OnInit {

  private biologicalAspect: BiologicalAspects;

  private sensoryDeficit: SensoryDeficit;
  private functionalDisability: FunctionalDisability;
  private malnutrition: Malnutrition;
  private cardiovascularFactors: CardiovascularFactors;
  private misuseMedications: MisuseMedications;
  private comments_bio: string;

  constructor(private dao: DAOService, private pageService: PageService) { }

  ngOnInit() {
    this.biologicalAspect = this.pageService.biologicalAspects;
    if (this.biologicalAspect) {
      this.sensoryDeficit = this.biologicalAspect.sensoryDeficitInstance;
      this.functionalDisability = this.biologicalAspect.functionalDisabilityInstance;
      this.malnutrition = this.biologicalAspect.malNutritionInstance;
      this.cardiovascularFactors = this.biologicalAspect.cardiovascularFactorsInstance;
      this.misuseMedications = this.biologicalAspect.misuseMedicationsInstance;
      this.comments_bio = this.biologicalAspect.comments;
      console.log(this.comments_bio);
    }
  }

  get isComplete() { return this.sensoryDeficit && this.functionalDisability && this.malnutrition && this.cardiovascularFactors && this.misuseMedications && this.comments_bio; }

  setSensoryDeficit(sd: SensoryDeficit) { if (this.biologicalAspect) this.biologicalAspect.sensoryDeficitInstance = sd; this.sensoryDeficit = sd; }
  setFunctionalDisability(fd: FunctionalDisability) { if (this.biologicalAspect) this.biologicalAspect.functionalDisabilityInstance = fd; this.functionalDisability = fd; }
  setMalnutrition(m: Malnutrition) { if (this.biologicalAspect) this.biologicalAspect.malNutritionInstance = m; this.malnutrition = m; }
  setCardiovascularFactors(cf: CardiovascularFactors) { if (this.biologicalAspect) this.biologicalAspect.cardiovascularFactorsInstance = cf; this.cardiovascularFactors = cf; }
  setMisuseMedications(mm: MisuseMedications) { if (this.biologicalAspect) this.biologicalAspect.misuseMedicationsInstance = mm; this.misuseMedications = mm; }
  setComments(c: string) {
    if (this.biologicalAspect) {
      this.dao.patchObject(REST_URL_PSYCHOLOGICAL_ASPECTS, {
        id: this.biologicalAspect.getId(),
        comments_bio: c
      }).subscribe((data: any) => {
        this.biologicalAspect.comments = data.comments_psico;
        this.comments_bio = data.comments_psico;
      }, _ => alert('Ocorreu um erro ao tentar alterar os comentários dos aspectos psicológicos'));
    } else this.comments_bio = c;
  }

  submit() {
    if (!this.biologicalAspect) {
      if (this.isComplete) this.dao.postObject(REST_URL_BIOLOGICAL_ASPECTS, {
        sensoryDeficit: this.sensoryDeficit.getId(),
        functionalDisability: this.functionalDisability.getId(),
        malNutrition: this.malnutrition.getId(),
        cardiovascularFactors: this.cardiovascularFactors.getId(),
        misuseMedications: this.misuseMedications.getId(),
        comments_bio: this.comments_bio
      }).subscribe(data => {
        this.biologicalAspect = new BiologicalAspects(data, this.sensoryDeficit, this.functionalDisability, this.malnutrition, this.cardiovascularFactors, this.misuseMedications);
        this.pageService.setBiologicalAspects(this.biologicalAspect);
      });
      else alert('Alguma das subareas não foi feita corretamente');
      // TODO - Fazer o alerta acima como o do psychological aspects
    }
  }
}
