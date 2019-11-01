import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FunctionalDisability } from '../../../../../shared/models/biological-aspects.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_FUNCTIONAL_DISABILITY } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-functional-disability',
  templateUrl: './functional-disability.component.html'
})
export class FunctionalDisabilityComponent implements OnInit {

  @Input('functionalDisability') functionalDisabilityInput: FunctionalDisability;
  @Output('functionalDisability') functionalDisabilityOutput = new EventEmitter<FunctionalDisability>();

  private functionalDisabilityForm: FormGroup;

  get q20_to_shop() { return this.functionalDisabilityForm.get('q20_to_shop'); }
  get q21_use_transport() { return this.functionalDisabilityForm.get('q21_use_transport'); }
  get q22_to_cook() { return this.functionalDisabilityForm.get('q22_to_cook'); }
  get q23UseTelephone() { return this.functionalDisabilityForm.get('q23UseTelephone'); }
  get q24_dress_up() { return this.functionalDisabilityForm.get('q24_dress_up'); }
  get q25TakeShower() { return this.functionalDisabilityForm.get('q25TakeShower'); }
  get need_investigation_functional() { return this.functionalDisabilityForm.get('need_investigation_functional'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.functionalDisabilityInput) this.functionalDisabilityForm = this.fb.group({
      q20_to_shop: [this.functionalDisabilityInput.getQ20(), [Validators.required, Validators.maxLength(1)]],
      q21_use_transport: [this.functionalDisabilityInput.getQ21(), [Validators.required, Validators.maxLength(1)]],
      q22_to_cook: [this.functionalDisabilityInput.getQ22(), [Validators.required, Validators.maxLength(1)]],
      q23UseTelephone: [this.functionalDisabilityInput.getQ23(), [Validators.required, Validators.maxLength(1)]],
      q24_dress_up: [this.functionalDisabilityInput.getQ24(), [Validators.required, Validators.maxLength(1)]],
      q25TakeShower: [this.functionalDisabilityInput.getQ25(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_functional: [this.functionalDisabilityInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.functionalDisabilityForm = this.fb.group({
      q20_to_shop: ['', [Validators.required, Validators.maxLength(1)]],
      q21_use_transport: ['', [Validators.required, Validators.maxLength(1)]],
      q22_to_cook: ['', [Validators.required, Validators.maxLength(1)]],
      q23UseTelephone: ['', [Validators.required, Validators.maxLength(1)]],
      q24_dress_up: ['', [Validators.required, Validators.maxLength(1)]],
      q25TakeShower: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_functional: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.functionalDisabilityForm.valid)
      if (this.functionalDisabilityInput) {
        const dirtyProps = {};
        let hasDirtyProps = false;

        for (const prop in this.functionalDisabilityForm.controls) {
          const propFormControl = this.functionalDisabilityForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_FUNCTIONAL_DISABILITY, dirtyProps).subscribe(data => {
          this.functionalDisabilityInput = new FunctionalDisability(data);
          this.functionalDisabilityOutput.emit(this.functionalDisabilityInput);
        });

      } else this.dao.postObject(REST_URL_FUNCTIONAL_DISABILITY, this.functionalDisabilityForm.getRawValue()).subscribe(data => {
        this.functionalDisabilityInput = new FunctionalDisability(data);
        this.functionalDisabilityOutput.emit(this.functionalDisabilityInput);
      });
    this.functionalDisabilityForm.markAllAsTouched();
  }
}
