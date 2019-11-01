import { Component, OnInit } from '@angular/core';
import { DAOService } from '../../../../shared/dao.service';
import { REST_URL_BIOLOGICAL_ASPECTS, REST_URL_PSYCHOLOGICAL_ASPECTS } from '../../../../shared/REST_API_URLs';
import {
  BiologicalAspects,
  CardiovascularFactors,
  FunctionalDisability,
  Malnutrition, MisuseMedications,
  SensoryDeficit
} from '../../../../shared/models/biological-aspects.model';

@Component({
  selector: 'app-biological-aspects',
  templateUrl: './biological-aspects.component.html'
})
export class BiologicalAspectsComponent implements OnInit {

  private sensoryDeficit: SensoryDeficit;
  private functionalDisability: FunctionalDisability;
  private malnutrition: Malnutrition;
  private cardiovascularFactors: CardiovascularFactors;
  private misuseMedications: MisuseMedications;
  private comments_bio: string;

  private biologicalAspects: BiologicalAspects;

  constructor(private dao: DAOService) { }

  ngOnInit() { }

  setSensoryDeficit(sd: SensoryDeficit) { this.sensoryDeficit = sd; this.submit(); }
  setFunctionalDisability(fd: FunctionalDisability) { this.functionalDisability = fd; this.submit(); }
  setMalnutrition(m: Malnutrition) { this.malnutrition = m; this.submit(); }
  setCardiovascularFactors(cf: CardiovascularFactors) { this.cardiovascularFactors = cf; this.submit(); }
  setMisuseMedications(mm: MisuseMedications) { this.misuseMedications = mm; this.submit(); }
  setComments(c: string) { this.comments_bio = c; this.submit(); }

  submit() {
    if (this.sensoryDeficit && this.functionalDisability && this.malnutrition && this.cardiovascularFactors && this.misuseMedications && this.comments_bio) this.dao.postObject(REST_URL_BIOLOGICAL_ASPECTS, {
      sensoryDeficit: this.sensoryDeficit.getId(),
      functionalDisability: this.functionalDisability.getId(),
      malNutrition: this.malnutrition.getId(),
      cardiovascularFactors: this.cardiovascularFactors.getId(),
      misuseMedications: this.misuseMedications.getId(),
      comments_bio: this.comments_bio
    }).subscribe(data => this.biologicalAspects = new BiologicalAspects(data));
  }
}
