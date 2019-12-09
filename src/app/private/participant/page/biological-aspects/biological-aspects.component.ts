import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_BIOLOGICAL_ASPECTS } from '../../../../shared/REST_API_URLs';
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

  ngOnInit() { }

  get isComplete() { return this.sensoryDeficit && this.functionalDisability && this.malnutrition && this.cardiovascularFactors && this.misuseMedications && this.comments_bio; }

  setSensoryDeficit(sd: SensoryDeficit) { this.sensoryDeficit = sd; this.submit(); }
  setFunctionalDisability(fd: FunctionalDisability) { this.functionalDisability = fd; this.submit(); }
  setMalnutrition(m: Malnutrition) { this.malnutrition = m; this.submit(); }
  setCardiovascularFactors(cf: CardiovascularFactors) { this.cardiovascularFactors = cf; this.submit(); }
  setMisuseMedications(mm: MisuseMedications) { this.misuseMedications = mm; this.submit(); }
  setComments(c: string) { this.comments_bio = c; this.submit(); }

  submit() {
    if (this.isComplete) this.dao.postObject(REST_URL_BIOLOGICAL_ASPECTS, {
      sensoryDeficit: this.sensoryDeficit.getId(),
      functionalDisability: this.functionalDisability.getId(),
      malNutrition: this.malnutrition.getId(),
      cardiovascularFactors: this.cardiovascularFactors.getId(),
      misuseMedications: this.misuseMedications.getId(),
      comments_bio: this.comments_bio
    }).subscribe(data => {
      this.biologicalAspect = new BiologicalAspects(data);
      this.pageService.setBiologicalAspects(this.biologicalAspect);
    });
    else alert('Alguma das subareas não foi feita corretamente');
  }
}
