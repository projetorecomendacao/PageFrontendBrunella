import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {REST_URL_ACTIVITY} from '../../../../shared/REST_API_URLs';
import {DAOService} from '../../../../shared/dao.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html'
})
export class DetailItemComponent implements OnInit {

  @Input() detailItem: {id: number, description: string};
  @Input() detailItemURL: string;
  @Output() deleteDetailItem = new EventEmitter<number>();
  detailItemForm: FormControl;

  constructor(private dao: DAOService) { }

  ngOnInit() {
    this.detailItemForm = new FormControl([this.detailItem.description, Validators.required]);
  }

  updateDetailItem() {
    const form = this.detailItemForm;

    this.dao.patchObject(this.detailItemURL, {
      id: this.detailItem.id,
      description: form.value
    }).subscribe((data: any) => {
      form.setValue(data.description);
      this.detailItem.description = data.description;
    }, error => {
      form.setValue(this.detailItem.description);
      alert('Ocorreu uma falha ao tentar alterar a descrição');
    });
  }
  _deleteDetailItem() {
    this.dao.deleteObject(this.detailItemURL, this.detailItem.id.toString()).subscribe(_ => this.deleteDetailItem.emit(this.detailItem.id), _ => alert('Não foi possível deletar'));
  }
}
