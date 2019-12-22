import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Violence } from '../../../../../shared/models/social-aspects.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DAOService } from '../../../../../shared/dao.service';
import { REST_URL_VIOLENCE } from '../../../../../shared/REST_API_URLs';

@Component({
  selector: 'app-violence',
  templateUrl: './violence.component.html'
})
export class ViolenceComponent implements OnInit {

  @Input('violence') violenceInput: Violence;
  @Output('violence') violenceOutput = new EventEmitter<Violence>();

  private violenceForm: FormGroup;

  get q79_afraid_close_person() { return this.violenceForm.get('q79_afraid_close_person'); }
  get q80_feels_abandoned() { return this.violenceForm.get('q80_feels_abandoned'); }
  get q81_forced() { return this.violenceForm.get('q81_forced'); }
  get q82_assauteld() { return this.violenceForm.get('q82_assauteld'); }
  get q83_in_need() { return this.violenceForm.get('q83_in_need'); }
  get q84_someone_used_money() { return this.violenceForm.get('q84_someone_used_money'); }
  get q85_touched_without_permission() { return this.violenceForm.get('q85_touched_without_permission'); }
  get q86_dont_take_care_health() { return this.violenceForm.get('q86_dont_take_care_health'); }
  get need_investigation_violence() { return this.violenceForm.get('need_investigation_violence'); }

  constructor(private fb: FormBuilder, private dao: DAOService) { }

  ngOnInit() {
    if (this.violenceInput) this.violenceForm = this.fb.group({
      q79_afraid_close_person: [this.violenceInput.getQ79(), [Validators.required, Validators.maxLength(1)]],
      q80_feels_abandoned: [this.violenceInput.getQ80(), [Validators.required, Validators.maxLength(1)]],
      q81_forced: [this.violenceInput.getQ81(), [Validators.required, Validators.maxLength(1)]],
      q82_assauteld: [this.violenceInput.getQ82(), [Validators.required, Validators.maxLength(1)]],
      q83_in_need: [this.violenceInput.getQ83(), [Validators.required, Validators.maxLength(1)]],
      q84_someone_used_money: [this.violenceInput.getQ84(), [Validators.required, Validators.maxLength(1)]],
      q85_touched_without_permission: [this.violenceInput.getQ85(), [Validators.required, Validators.maxLength(1)]],
      q86_dont_take_care_health: [this.violenceInput.getQ86(), [Validators.required, Validators.maxLength(1)]],
      need_investigation_violence: [this.violenceInput.getNeedInvestigation(), [Validators.required, Validators.maxLength(1)]],
    });
    else this.violenceForm = this.fb.group({
      q79_afraid_close_person: ['', [Validators.required, Validators.maxLength(1)]],
      q80_feels_abandoned: ['', [Validators.required, Validators.maxLength(1)]],
      q81_forced: ['', [Validators.required, Validators.maxLength(1)]],
      q82_assauteld: ['', [Validators.required, Validators.maxLength(1)]],
      q83_in_need: ['', [Validators.required, Validators.maxLength(1)]],
      q84_someone_used_money: ['', [Validators.required, Validators.maxLength(1)]],
      q85_touched_without_permission: ['', [Validators.required, Validators.maxLength(1)]],
      q86_dont_take_care_health: ['', [Validators.required, Validators.maxLength(1)]],
      need_investigation_violence: ['', [Validators.required, Validators.maxLength(1)]],
    });
  }

  submit() {
    if (this.violenceForm.valid)
      if (this.violenceInput) {
        const dirtyProps = { id: this.violenceInput.getId() };
        let hasDirtyProps = false;

        for (const prop in this.violenceForm.controls) {
          const propFormControl = this.violenceForm.get(prop);
          if (propFormControl.dirty) {
            dirtyProps[prop] = propFormControl.value;
            hasDirtyProps = true;
            propFormControl.markAsPristine();
          }
        }

        if (hasDirtyProps) this.dao.patchObject(REST_URL_VIOLENCE, dirtyProps).subscribe(data => {
          this.violenceInput = new Violence(data);
          this.violenceOutput.emit(this.violenceInput);
        });

      } else this.dao.postObject(REST_URL_VIOLENCE, this.violenceForm.getRawValue()).subscribe(data => {
        this.violenceInput = new Violence(data);
        this.violenceOutput.emit(this.violenceInput);
      });
    this.violenceForm.markAllAsTouched();
  }
}
