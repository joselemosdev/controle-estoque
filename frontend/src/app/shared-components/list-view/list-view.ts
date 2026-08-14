import { Dialog } from '@angular/cdk/dialog';
import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBackward, faCopy, faEdit, faEye, faPlusCircle, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { DataComponentService } from '../dataComponentService';
import { CrudModal } from '../exclude-modal/exclude-modal';

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

  public copyId(id: string) {
    navigator.clipboard.writeText(id);
  }

  public editItem(item: any) {
    this.router.navigate([`/${this.newRoute()}`]);
    // this.openModal('edit', item);
  }

  public viewItem(item: any) {
    this.router.navigate([`/${this.newRoute()}`]);
  }

  public deleteItem(id: string) {
    this.modal.open(CrudModal, {
      width: "600px",
      data: {
        id: id
      }
    })
  }

  openModalWithItem(item: string) {

  }

}
