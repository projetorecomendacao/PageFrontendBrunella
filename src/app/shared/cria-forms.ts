import { FormGroup } from "@angular/forms";

export interface CriaForm {
    geraFormGroup(data?:any): FormGroup; 
}