import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../../../shared/models/activity.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DAOService} from '../../../shared/dao.service';
import {REST_URL_ACTIVITY, REST_URL_CHARACTERISTIC} from '../../../shared/REST_API_URLs';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html'
})
export class ActivityItemComponent implements OnInit {

  details: boolean;

  @Input() activity: Activity;

  activityForm: FormGroup;
  hasActivity: boolean;

  get characteristicForm() { return this.activityForm.get('characteristic') as FormArray; }
  get URL_CHARACTERISTIC() { return REST_URL_CHARACTERISTIC; }

  constructor(private dao: DAOService, private fb: FormBuilder) { }

  ngOnInit() {
    this.details = false;
    this.hasActivity = !!this.activity;

    if (!this.hasActivity)
      this.activity = new Activity();

    this.activityForm = this.fb.group({
      title: [this.activity.title || 'Adicionar título', Validators.required],
      description: [this.activity.description || 'Adicionar descrição', Validators.required],
      characteristic: this.fb.array([])
    });

    for (const characteristic of this.activity.characteristics || [])
      this.characteristicForm.push(this.fb.control([characteristic.description]));
  }

  updateDescription() {
    const description = this.activityForm.get('description');

    this.dao.patchObject(REST_URL_ACTIVITY, {
      id: this.activity.id,
      description: description.value
    }).subscribe((data: any) => {
      description.setValue(data.description);
      this.activity.description = data.description;
    }, error => {
      description.setValue(this.activity.description);
      alert('Ocorreu uma falha ao tentar alterar a descrição');
    });
  }
  removeDetailItem(id: number) {
    const characteristIndex = this.activity.characteristics.findIndex(value => value.id === id);
    if (characteristIndex !== -1) {
      this.activity.characteristics.splice(characteristIndex, 1);
      return;
    }
  }

}
