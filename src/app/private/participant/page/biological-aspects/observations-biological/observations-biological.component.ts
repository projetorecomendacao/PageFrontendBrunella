import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-observations-biological',
  templateUrl: './observations-biological.component.html'
})
export class ObservationsBiologicalComponent implements OnInit {

  @Input('comments') commentsInput: string;
  @Output('comments') commentsOutput = new EventEmitter<string>();
  private commentsForm: FormControl;

  constructor() { }

  ngOnInit() {
    if (this.commentsInput) this.commentsForm = new FormControl(this.commentsInput, [Validators.required]);
    else this.commentsForm = new FormControl('', [Validators.required]);
  }

  submit() {
    if (this.commentsForm.valid) {
      this.commentsInput = this.commentsForm.value;
      this.commentsOutput.emit(this.commentsInput);
    } else this.commentsForm.markAsTouched();
  }
}
