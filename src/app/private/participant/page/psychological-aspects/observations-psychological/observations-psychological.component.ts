import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { REST_URL_NEGATIVE_ATTITUDE_AGING } from '../../../../../shared/REST_API_URLs';
import { NegativeAttitudesAging } from '../../../../../shared/models/psychologicalAspects.model';
import { DAOService } from '../../../../../shared/dao.service';

@Component({
  selector: 'app-observations-psychological',
  templateUrl: './observations-psychological.component.html'
})
export class ObservationsPsychologicalComponent implements OnInit {

  @Input('comments') commentsInput: string;
  @Output('comments') commentsOutput = new EventEmitter<string>();
  private commentsForm: FormControl;

  constructor(private dao: DAOService) { }

  ngOnInit() {
    if (this.commentsInput) this.commentsForm = new FormControl(this.commentsForm);
    else this.commentsForm = new FormControl('');
  }

  submit() {
    this.commentsInput = this.commentsForm.value;
    this.commentsOutput.emit(this.commentsInput);
  }

}
