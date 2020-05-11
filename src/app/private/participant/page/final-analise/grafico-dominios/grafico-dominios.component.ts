import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dominios',
  templateUrl: './grafico-dominios.component.html'
})
export class GraficoDominiosComponent implements OnInit {
  @Input() pageForm : FormGroup;
  
  psi_co :number;
  psi_de :number;
  psi_ne :number;
  psi_asp : number;

  bio_ca:number;
  bio_fu:number;
  bio_ma:number;
  bio_mi:number;
  bio_se:number;
  bio_asp: number;

  soc_en:number;
  soc_lo:number;
  soc_vi:number;
  soc_asp: number;

  mul_fa:number;
  mul_asp: number;

  total: number;

  bom: boolean;
  medio: boolean;
  ruim: boolean;

  constructor() { }

  ngOnInit(): void {
    this.calcula();
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

    this.radarChartData = [
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: '0%', backgroundColor: 'red'},
      { data: [this.psi_co, this.psi_ne,this.psi_de, this.bio_se, this.bio_fu, this.bio_ma, this.bio_ca, this.bio_mi, this.soc_lo, this.soc_en,this.soc_vi, this.mul_fa], label: 'Resultado do Paciente'},
      { data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], label: '100%'},
    ];
  }

  
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public radarChartLabels: Label[] = ['Déficit Cognitivo', 'Atitude Envelhecimento', 'Depressão',
    'Déficit Sensorial', 'Incapacidade Funcional', 'Desnutrição', 'DCV', 'Medicamentos','Baixo Suporte Social','Ambiente',
    'Violência', 'Quedas'];

  public radarChartData: ChartDataSets[]; 

  public radarChartType: ChartType = 'radar';

}
