import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
  REST_URL_ACTIVITY,
  REST_URL_BENEFIT,
  REST_URL_CHARACTERISTIC,
  REST_URL_RESTRICTION, REST_URL_TYPE
} from '../../../../shared/REST_API_URLs';
import {DAOService} from '../../../../shared/dao.service';
import {Activity} from '../../../../shared/models/activity.model';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html'
})
export class DetailItemComponent implements OnInit {

  @Input() detailItem: { id: number, description: string };
  @Input() type: string;
  @Output() removeDetailItem = new EventEmitter<number>();
  @Output() addDetailItem = new EventEmitter<{ id: number, description: string }>();

  detailItemURL: string;
  isAddDetailItem: boolean;

  constructor(private dao: DAOService) { }

  ngOnInit() {
    this.isAddDetailItem = !this.detailItem;

    if (this.isAddDetailItem) this.detailItem = { id: undefined, description: undefined };

    if (this.type === 'characteristic') this.detailItemURL = REST_URL_CHARACTERISTIC;
    else if (this.type === 'benefit') this.detailItemURL = REST_URL_BENEFIT;
    else if (this.type === 'restriction') this.detailItemURL = REST_URL_RESTRICTION;
    else if (this.type === 'type') this.detailItemURL = REST_URL_TYPE;
  }

  createDetailItem() {
    this.dao.postObject(this.detailItemURL, { description: this.detailItem.description }).subscribe((data: { id: number, description: string }) => this.addDetailItem.emit(data), error => alert('Não foi possível adicionar esse detalhe'));
    this.detailItem = { id: undefined, description: undefined };
  }

  updateDetailItem(description: string) {
    if (!this.isAddDetailItem) this.dao.patchObject(this.detailItemURL, {
      id: this.detailItem.id,
      description
    }).subscribe((data: any) => this.detailItem.description = data.description, error => alert('Ocorreu uma falha ao tentar alterar a descrição'));
    else this.detailItem.description = description;
  }
  deleteDetailItem() {
    this.dao.deleteObject(this.detailItemURL, this.detailItem.id.toString()).subscribe(_ => this.removeDetailItem.emit(this.detailItem.id), _ => alert('Não foi possível deletar'));
  }
}
