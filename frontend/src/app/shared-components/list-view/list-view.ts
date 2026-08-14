import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward, faCopy, faEdit, faEye, faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CrudModal } from '../crud-modal/crud-modal';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-list-view',
  imports: [FontAwesomeModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView implements OnInit {
  newRoute = input<string>('');
  label = input<string>('');

  faPlusCircle = faPlusCircle;
  faBackward = faBackward;
  faEdit = faEdit;
  faTrashCan = faTrashCan;
  faCopy = faCopy;
  faEye = faEye;

  private router = inject(Router);
  modal = inject(Dialog);
  dataComponentService = inject(DataComponentService);
  isReadOnly = input<boolean>(false);
  copyBox = document.getElementById("copy");

  constructor() {
  }

  ngOnInit(): void {

  }

  public backScreen() {
    this.router.navigate(["/"]);
  }

  public openNewScreen() {
    this.router.navigate([`/${this.newRoute()}/new`]);
  }

  adicionar() {
    this.openModal('new');
  }

  copyId(id: string) {
    navigator.clipboard.writeText(id);
  }

  deleteItem(item: any) {
    this.openModal('delete', item);
  }

  editItem(item: any) {
    this.openModal('edit', item);
  }

  ViewItem(item: any) {
    this.openModal('view', item);
  }

  openModal(action: string, item?: any) {
    this.modal.open(CrudModal, {
      width: "800px",
      data: {
        item: item,
        action: action
      }
    })
  }

  openModalWithItem(item: string) {

  }

}
