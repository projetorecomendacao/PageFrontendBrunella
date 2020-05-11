import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-escores',
  templateUrl: './escores.component.html'
})
export class EscoresComponent implements OnInit {
  @Input() pageForm : FormGroup;

  psi_co :number = 0;
  psi_de :number = 0;
  psi_ne :number = 0;
  psi_asp : number = 0;

  bio_ca:number = 0;
  bio_fu:number = 0;
  bio_ma:number = 0;
  bio_mi:number = 0;
  bio_se:number = 0;
  bio_asp: number = 0;

  soc_en:number = 0;
  soc_lo:number = 0;
  soc_vi:number = 0;
  soc_asp: number = 0;

  mul_fa:number = 0;
  mul_asp: number = 0;

  total: number = 0;

  bom: boolean;
  medio: boolean;
  ruim: boolean;

  constructor() { 
  }

  ngOnInit(): void {
    this.calcula();
  }

  calcula(): void {
    this.psi_co  = this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get('score').value;
    this.psi_de  = this.pageForm.get('psychologicalAspectsForm').get('depressionForm').get('score').value;
    this.psi_ne  = this.pageForm.get('psychologicalAspectsForm').get('negativeAttitudesAgingForm').get('score').value;
    this.psi_asp  = (this.psi_co + this.psi_de + this.psi_ne);
  
    this.bio_ca = this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('score').value;
    this.bio_fu = this.pageForm.get('biologicalAspectsForm').get('functionalDisabilityForm').get('score').value;
    this.bio_ma = this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('score').value;
    this.bio_mi = this.pageForm.get('biologicalAspectsForm').get('misuseMedicationsForm').get('score').value;
    this.bio_se = this.pageForm.get('biologicalAspectsForm').get('sensoryDeficitForm').get('score').value;
    this.bio_asp = (this.bio_ca + this.bio_fu + this.bio_ma + this.bio_mi + this.bio_se);

    this.soc_en = this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('score').value;
    this.soc_lo = this.pageForm.get('socialAspectsForm').get('lowSocialSupportForm').get('score').value;
    this.soc_vi = this.pageForm.get('socialAspectsForm').get('violenceForm').get('score').value;
    this.soc_asp = (this.soc_en + this.soc_lo + this.soc_vi);
  
    this.mul_fa = this.pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('score').value;
    this.mul_asp = (this.mul_fa);
  
    this.total = (this.psi_asp + this.bio_asp + this.soc_asp + this.mul_asp);
  
    this.bom = (this.total > 70);
    this.medio = (this.total < 70 && this.total > 39);
    this.ruim = (this.total < 40);
  }

}
