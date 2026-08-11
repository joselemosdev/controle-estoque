import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCopy, faEdit, faEye, faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CrudModal } from '../crud-modal/crud-modal';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-list-view',
  imports: [FontAwesomeModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView implements OnInit {

  faPlusCircle = faPlusCircle;
  faEdit = faEdit;
  faTrashCan = faTrashCan;
  faCopy = faCopy;
  faEye = faEye;

  modal = inject(Dialog);
  dataComponentService = inject(DataComponentService);
  isReadOnly = input<boolean>(false);
  copyBox = document.getElementById("copy");

  constructor() {
  }

  ngOnInit(): void {

  }

  adicionar() {
    this.openModal('new');
  }

  copyId(id: string) {
    navigator.clipboard.writeText(id);
  }

  deleteItem(item: any) {
    this.openModal('delete');
    // this.dataComponentService.deleById(id)
  }

  editItem(id: string) {
    console.log(id)

  }

  ViewItem(item: any) {
    this.modal.open(CrudModal, {
      width: '800px',
      data: {
        Action: 'view',
        item: item
      }
    })
  }

  openModal(item: any, action: string) {
    this.modal.open(CrudModal, {
      width: "800px",
      data: {
        action: action
      }
    })
  }

  openModalWithItem(item: string) {

  }

}
