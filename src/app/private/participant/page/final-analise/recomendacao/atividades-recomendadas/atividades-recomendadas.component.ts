import { Component, OnInit, Input } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-atividades-recomendadas',
  templateUrl: './atividades-recomendadas.component.html'
})
export class AtividadesRecomendadasComponent implements OnInit {
  @Input() _paciente : any;
  @Input() _atividade : any;

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };

  public radarChartLabels: Label[] = ['Déficit Cognitivo', 'Atitude Envelhecimento', 'Depressão',
    'Déficit Sensorial', 'Incapacidade Funcional', 'Desnutrição', 'DCV', 'Medicamentos','Suporte Social','Ambiente',
    'Violência', 'Quedas'];

  public radarChartData: ChartDataSets[]; 

  public radarChartType: ChartType = 'radar';

  constructor() { 

  }

  ngOnInit(): void {
    this.radarChartData = [
      { data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], label: '0%', backgroundColor: 'red'},
      { data: [this._paciente.psi_co,this._paciente.psi_ne,this._paciente.psi_de, 
        this._paciente.bio_se,this._paciente.bio_fu, this._paciente.bio_ma, 
        this._paciente.bio_ca,this._paciente.bio_mi,this._paciente.soc_lo, 
        this._paciente.soc_en,this._paciente.soc_vi,this._paciente.mul_fa], 
        label: 'Resultado do Paciente'
      },
      { data: [this._atividade.Cognition,
        this._atividade.Attitude,
        this._atividade.Depression,
        this._atividade.Sensorial,
        this._atividade.Functional,
        this._atividade.Nutrition,
        this._atividade.Cardiovascular,
        this._atividade.Prescriptions,
        this._atividade.SocialSupport,
        this._atividade.Environment,
        this._atividade.Violence,
        this._atividade.Falls], 
        label: 'Atividade'
      },

      { data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], label: '100%'},
    ];
  }

}
