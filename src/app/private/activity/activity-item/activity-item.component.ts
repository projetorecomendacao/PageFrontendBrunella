import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Output() newActivity = new EventEmitter<Activity>();

  activityForm: FormGroup;
  hasActivity: boolean; // Checks if this is the add component

  get URL_CHARACTERISTIC() { return REST_URL_CHARACTERISTIC; }

  constructor(private dao: DAOService, private fb: FormBuilder) { }

  ngOnInit() {
    this.details = false;
    this.hasActivity = !!this.activity;

    if (!this.hasActivity)
      this.activity = new Activity();

    this.activityForm = this.fb.group({
      title: [this.activity.title, Validators.required],
      description: [this.activity.description, Validators.required]
    });
  }

  createActivity(obj = {}) {
    console.log(obj);
    this.dao.postObject(REST_URL_ACTIVITY, obj).subscribe(data => {
      this.newActivity.emit(new Activity(data));
    }, error => alert('Não foi possível criar a atividade'));
  }

  updateDescription() {
    const description = this.activityForm.get('description');
    if (!this.activity.id) {
      this.createActivity({ description: description.value });
      return;
    }

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

  addCharacteristicsItem(description: string) {
    if (!this.activity.id)
      this.createActivity();

    this.dao.postObject(REST_URL_CHARACTERISTIC, { description }).subscribe((data: {id: number, description: string}) => {
      const characteristicsId = this.activity.characteristics.map(value => value.id);
      characteristicsId.push(data.id);

      this.dao.patchObject(REST_URL_ACTIVITY, {
        id: this.activity.id,
        characteristic: characteristicsId
      }).subscribe(data2 => {
        console.log(data2);
        this.activity = new Activity(data2);
      }, error => alert('Não foi possível adicionar essa característica'));
    }, error => alert('Não foi possível adicionar essa característica'));
  }

}
