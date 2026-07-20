import { Component, inject, Input, input } from '@angular/core';
import { DataComponentService } from '../dataComponentService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Dialog } from '@angular/cdk/dialog';
import { CrudModal } from '../crud-modal/crud-modal';

@Component({
  selector: 'app-list-view',
  imports: [FontAwesomeModule],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView {

    faPlusCircle = faPlusCircle;
    modal = inject(Dialog);
  constructor(
     protected dataComponentService : DataComponentService,
  ){}  

  adicionar(){
    this.modal.open(CrudModal, {
      width: "800px",
    })
  }
}
