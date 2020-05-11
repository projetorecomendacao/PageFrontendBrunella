import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-environmental-problems',
  templateUrl: './environmental-problems.component.html'
})
export class EnvironmentalProblemsComponent implements OnInit {

  @Input() pageForm: FormGroup;

   // variáveis booleans que controlam as mensagens de certo e errado no final do form
   public errado: boolean = false;
   public branco: boolean = true;
 
   //dominio e dimensão
   private dimensao: string = 'environmentalProblemsForm';
   private dominio: string = 'socialAspectsForm'; 
   
   //Pontuação máxima
   public max_score : number = 16;
   //Pontos da dimensão
   public score : number = 0;

   //variáveis de cada ambiente
   private ambExt : number = 0;
   private ambInt : number = 0;
   private comRis : number = 0;
   //Campos que são válidos para contar o número de acertos
   vetConta: string[] = ['q63_estable_furniture', 'q64_loose_objects_carpets',  'q65_slippery_floor',
   'q66_handrail_on_stairs',  'q67_lighted_stairs',  'q68_suitable_stairs_steps',
   'q69_non_slippery_carpet',
   'q70_get_on_stool', 'q71_turn_lights_off', 'q72_safe_shoes',
  'q73_manicure_sidewalks', 'q74_public_transport_access', 'q75_commerce_access',
  'q76_ease_plasewalking', 'q77_fun_access', 'q78_safety']
 
   vetGabarito: string[] = ['S','N','N','S','S','S','S','N','N','S','S','S','S','S','S','S'];
   
   //O serviço checa campo retorna as imanges de verificação dos campos 
   constructor(private checaCampo : ChecaCampo) { }
   
   //contagem dos campos que combinam para calcular o score
   conta_certo(): number{
     this.score = 0;
     this.ambExt = 0; 
     this.ambInt = 0;
     this.comRis = 0;
     for (let i=0;  i < this.max_score; i++){
       if (this.vetGabarito[i] == this.pageForm.get(this.dominio).get(this.dimensao).get(this.vetConta[i]).value){
         this.score++;
         if(i > 9){
           this.ambExt ++;
         } else {
           if(i > 6) {
             this.comRis++;
           } else {
             this.ambInt++;
           }
         }
       }
     }
     this.pageForm.get(this.dominio).get(this.dimensao).get('behaviorRisk').setValue(this.comRis);
     this.pageForm.get(this.dominio).get(this.dimensao).get('domesticRisk').setValue(this.ambInt);
     this.pageForm.get(this.dominio).get(this.dimensao).get('score').setValue(this.score);
     return this.score;
   }
   
     ngOnInit():void {}
   
     // método que verifica a situação dos campos do form
     mudou(campo: string): string{ 
       var volta: string = this.checaCampo.inicio();
       if(!this.pageForm.get(this.dominio).get(this.dimensao).get(campo).pristine){
         volta = this.checaCampo.checa(this.pageForm.get(this.dominio).get(this.dimensao).get(campo).valid);
       }
       return volta;
     }
 
     // método que verifica se o form está válido
     formValido(): Boolean{
       this.branco = false;
       this.errado = false;
       for (var caca in this.pageForm.get(this.dominio).get(this.dimensao).value){
         if(!this.pageForm.get(this.dominio).get(this.dimensao).get(caca).valid){
           if(this.pageForm.get(this.dominio).get(this.dimensao).get(caca).pristine){
             this.branco = true;
           } else {
             this.errado = true;
           }
         }
       }
       return this.pageForm.get(this.dominio).get(this.dimensao).valid;
     } 
 
   submit() {
     for (var caca in this.pageForm.get(this.dominio).get(this.dimensao).value){
       this.pageForm.get(this.dominio).get(this.dimensao).get(caca).markAsTouched;
       this.pageForm.get(this.dominio).get(this.dimensao).get(caca).updateValueAndValidity;
     }
   }
 }