import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Activity} from '../../../shared/models/activity.model';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DAOService} from '../../../shared/dao.service';
import {
  REST_URL_ACTIVITY,
  REST_URL_BENEFIT,
  REST_URL_CHARACTERISTIC,
  REST_URL_RESTRICTION, REST_URL_TYPE
} from '../../../shared/REST_API_URLs';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html'
})
export class ActivityItemComponent implements OnInit {

  details: boolean;

  @Input() activity: Activity;
  @Output() newActivity = new EventEmitter<Activity>();
  @Output() removeActivity = new EventEmitter<number>();

  isAddActivity: boolean; // Checks if this is the add component

  get URL_CHARACTERISTIC() { return REST_URL_CHARACTERISTIC; }
  get URL_BENEFIT() { return REST_URL_BENEFIT; }
  get URL_RESTRICTION() { return REST_URL_RESTRICTION; }
  get URL_TYPE() { return REST_URL_TYPE; }

  constructor(private dao: DAOService) { }

  ngOnInit() {
    this.details = !this.activity;
    this.isAddActivity = !this.activity;

    if (this.isAddActivity) this.activity = new Activity();
  }

  createActivity() {
    this.dao.postObject(REST_URL_ACTIVITY, {
      title: this.activity.title,
      description: this.activity.description,
      image: this.activity.image
    }).subscribe(data => {
      console.log(data);
      this.newActivity.emit(new Activity(data));
      this.activity = new Activity();
    }, error => alert('Não foi possível criar a atividade'));
  }

  deleteActivity() {
    this.dao.deleteObject(REST_URL_ACTIVITY, this.activity.id.toString()).subscribe(data => this.removeActivity.emit(this.activity.id), error => alert('Não foi possível deletar a atividade'));
  }

  updateTitle(title: string) {
    if (!this.isAddActivity) this.dao.patchObject(REST_URL_ACTIVITY, {
      id: this.activity.id,
      title
    }).subscribe(_ => {
      this.activity.title = title;
    }, error => alert('Ocorreu uma falha ao tentar alterar o título'));
    else this.activity.title = title;
  }
  updateDescription(description: string) {
    if (!this.isAddActivity) this.dao.patchObject(REST_URL_ACTIVITY, {
      id: this.activity.id,
      description
    }).subscribe(_ => {
      this.activity.description = description;
    }, error => alert('Ocorreu uma falha ao tentar alterar a descrição'));
    else this.activity.description = description;
  }
  updateImage(imageURL: string) {
    if (!this.isAddActivity) this.dao.patchObject(REST_URL_ACTIVITY, {
      id: this.activity.id,
      imageURL
    }).subscribe(_ => {
      this.activity.image = imageURL;
    }, error => alert('Ocorreu uma falha ao tentar alterar a imagem'));
    else this.activity.image = imageURL;
  }

  addDetailItem(detailItem: { id: number, description: string }, type: string) {
    let idArray: number[];
    if (type === 'characteristic')
      idArray = this.activity.characteristic.map(value => value.id);
    else if (type === 'benefit')
      idArray = this.activity.benefit.map(value => value.id);
    else if (type === 'restriction')
      idArray = this.activity.restriction.map(value => value.id);
    else if (type === 'type')
      idArray = this.activity.type.map(value => value.id);

    idArray.push(detailItem.id);

    const requestObj = { id: this.activity.id };
    requestObj[type] = idArray;

    this.dao.patchObject(REST_URL_ACTIVITY, requestObj).subscribe(data => this.activity = new Activity(data), error => alert('Não foi possível adicionar a característica'))
  }
  removeDetailItem(id: number, type: string) {
    if (type === 'characteristic') {
      const characteristicIndex = this.activity.characteristic.findIndex(value => value.id === id);
      if (characteristicIndex !== -1) {
        this.activity.characteristic.splice(characteristicIndex, 1);
        return;
      }
    } else if (type === 'benefit') {
      const benefitIndex = this.activity.benefit.findIndex(value => value.id === id);
      if (benefitIndex !== -1) {
        this.activity.benefit.splice(benefitIndex, 1);
        return;
      }
    } else if (type === 'restriction') {
      const restrictionIndex = this.activity.restriction.findIndex(value => value.id === id);
      if (restrictionIndex !== -1) {
        this.activity.restriction.splice(restrictionIndex, 1);
        return;
      }
    } else if (type === 'type') {
      const typeIndex = this.activity.type.findIndex(value => value.id === id);
      if (typeIndex !== -1) {
        this.activity.type.splice(typeIndex, 1);
        return;
      }}
  }

}
