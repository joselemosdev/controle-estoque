import { Component, inject, Input, input, OnInit } from '@angular/core';
import { DataComponentService } from '../dataComponentService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle, faEdit, faTrashCan, faEye, faCopy } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { CrudModal } from '../crud-modal/crud-modal';

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

  constructor() {
  }

  ngOnInit(): void {
    this.dataComponentService.loadMovimentacaoEstoque();
  }

  adicionar() {
    this.modal.open(CrudModal, {
      width: "800px",
    })
  }
}
