import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-observations-psychological',
  templateUrl: './observations-psychological.component.html'
})
export class ObservationsPsychologicalComponent implements OnInit {

  @Input('comments') commentsInput: string;
  @Output('comments') commentsOutput = new EventEmitter<string>();
  private commentsForm: FormControl;

  constructor() { }

  ngOnInit() {
    if (this.commentsInput) this.commentsForm = new FormControl(this.commentsForm);
    else this.commentsForm = new FormControl('');
  }

  submit() {
    this.commentsInput = this.commentsForm.value;
    this.commentsOutput.emit(this.commentsInput);
  }

}
