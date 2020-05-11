import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-dimesoes',
  templateUrl: './grafico-dimesoes.component.html'
})
export class GraficoDimesoesComponent implements OnInit {

  @Input() pageForm : FormGroup;

  certo : boolean = false;

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

      this.psi_co  = this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get('score').value;
      this.psi_de  = this.pageForm.get('psychologicalAspectsForm').get('depressionForm').get('score').value;
      this.psi_ne  = this.pageForm.get('psychologicalAspectsForm').get('negativeAttitudesAgingForm').get('score').value;
      this.psi_asp  = (this.psi_co + this.psi_de + this.psi_ne) *(100/14);
    
      this.bio_ca = this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('score').value;
      this.bio_fu = this.pageForm.get('biologicalAspectsForm').get('functionalDisabilityForm').get('score').value;
      this.bio_ma = this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('score').value;
      this.bio_mi = this.pageForm.get('biologicalAspectsForm').get('misuseMedicationsForm').get('score').value;
      this.bio_se = this.pageForm.get('biologicalAspectsForm').get('sensoryDeficitForm').get('score').value;
      this.bio_asp = (this.bio_ca + this.bio_fu + this.bio_ma + this.bio_mi + this.bio_se) *(100/36) ;
      

      this.soc_en = this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('score').value;
      this.soc_lo = this.pageForm.get('socialAspectsForm').get('lowSocialSupportForm').get('score').value;
      this.soc_vi = this.pageForm.get('socialAspectsForm').get('violenceForm').get('score').value;
      this.soc_asp = (this.soc_en + this.soc_lo + this.soc_vi) * (100/32);
    
      this.mul_fa = this.pageForm.get('multidimensionalAspectsForm').get('fallsForm').get('score').value;
      this.mul_asp = (this.mul_fa) * (100/15);

      this.radarChartData = [
        { data: [0, 0, 0, 0], label: '0%', backgroundColor: 'red'},
        { data: [this.psi_asp, this.bio_asp, this.soc_asp, this.mul_asp], label: 'Resultado do Paciente'},
        { data: [100, 100, 100, 100], label: '100%'},
      ];


    }



  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  
  public radarChartLabels: Label[] = ['Psicológica', 'Biológica', 'Social', 'Quedas'];

  public radarChartData: ChartDataSets[]; 

  public radarChartType: ChartType = 'radar';
  
}
