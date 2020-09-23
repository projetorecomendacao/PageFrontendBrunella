import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';
import { Router } from '@angular/router';
import { PageService } from '../page.service';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 


@Component({
  selector: 'app-final-analise',
  templateUrl: './final-analise.component.html'
})
export class FinalAnaliseComponent implements OnInit {

  @Input() pageForm: FormGroup;

  nome : string;
  hoje : Date;

  conta:number=0;
  
  constructor(private checaCampo: ChecaCampo, private router: Router, private pageService : PageService) { }

  ngOnInit() { 
    this.nome = this.pageService.participant.getName();
    this.hoje = new Date ();
  }

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    var volta: string = this.checaCampo.inicio();
    if(!this.pageForm.get('demandMapForm').get(campo).pristine){
      volta = this.checaCampo.checa(this.pageForm.get('demandMapForm').get(campo).valid);
    }
    return volta;
  }

  graficos(): boolean{
    return this.pageForm.get('multidimensionalAspectsForm').valid;
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    //this.conta++;
    //console.log("graficos: " + this.conta);
    return this.pageForm.get('demandMapForm').valid;
  } 

  submit() { 
    this.pageService.submit(this.pageForm);    
    alert('PAGe salvo com sucesso!!');
    this.router.navigate(['private/']).then();
  }

  gerarPDF(){
    var _nome = document.getElementById('div_pdf');  
    html2canvas(_nome).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 180;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
      const contentDataURL = canvas.toDataURL('image/png')  
      var position = 0;  
      let pdf = new jspdf.jsPDF('p', 'mm', 'a3');
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  

  }
}
