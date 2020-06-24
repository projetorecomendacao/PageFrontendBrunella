import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AtividadesRec } from 'src/app/shared/models/atividades-service';

@Component({
  selector: 'app-recomendacao',
  templateUrl: './recomendacao.component.html'
})
export class RecomendacaoComponent implements OnInit {
  @Input() pageForm : FormGroup;
  
  psi_co :number;
  psi_de :number;
  psi_ne :number;

  bio_ca:number;
  bio_fu:number;
  bio_ma:number;
  bio_mi:number;
  bio_se:number;

  soc_en:number;
  soc_lo:number;
  soc_vi:number;

  mul_fa:number;

  paciente:any;

  lista_atividades:any[];

  constructor(private atividadeRec : AtividadesRec) { }

  ngOnInit(): void {
    this.calcula();
    this.lista_atividades = this.atividadeRec.getLista();
  }

  calcula():void {
    //Déficit cognitivo
    this.psi_co  = this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get('score').value * (100/6); 
    //Depressão
    this.psi_de  = this.pageForm.get('psychologicalAspectsForm').get('depressionForm').get('score').value * (100/6);
    //Atitude Envelhecimento
    this.psi_ne  = this.pageForm.get('psychologicalAspectsForm').get('negativeAttitudesAgingForm').get('score').value * (100/2);
    //Cardio Vascular
    this.bio_ca = this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('score').value * (100/9);
    //Incapacidade Funcional
    this.bio_fu = this.pageForm.get('biologicalAspectsForm').get('functionalDisabilityForm').get('score').value * (100/6);
    //Desnutrição
    this.bio_ma = this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('score').value * (100/7);
    //Uso medicamentos
    this.bio_mi = this.pageForm.get('biologicalAspectsForm').get('misuseMedicationsForm').get('score').value * (100/9);
    //Déficit Sensorial
    this.bio_se = this.pageForm.get('biologicalAspectsForm').get('sensoryDeficitForm').get('score').value * (100/5);
    //Problemas ambientais
    this.soc_en = this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('score').value * (100/16);
    //Baixo suporte social
    this.soc_lo = this.pageForm.get('socialAspectsForm').get('lowSocialSupportForm').get('score').value * (100/8);
    //Violência
    this.soc_vi = this.pageForm.get('socialAspectsForm').get('violenceForm').get('score').value * (100/8);
    //Quedas
    this.mul_fa = this.pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('score').value * (100/15);  
    this.paciente = {
      'psi_co' : this.psi_co,
      'psi_de' : this.psi_de,
      'psi_ne' : this.psi_ne,
    
      'bio_ca' : this.bio_ca,
      'bio_fu' : this.bio_fu,
      'bio_ma' : this.bio_ma,
      'bio_mi' : this.bio_mi,
      'bio_se' : this.bio_se,
    
      'soc_en' : this.soc_en,
      'soc_lo' : this.soc_lo,
      'soc_vi' : this.soc_vi,
    
      'mul_fa' : this.mul_fa
    }
  }
}
