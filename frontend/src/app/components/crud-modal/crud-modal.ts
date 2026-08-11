import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-crud-modal',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './crud-modal.html',
  styleUrl: './crud-modal.css',
})
export class CrudModal {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
  ) {
    this.title = this.service.record!.titlePlural.toString();
  }


  faXmark = faXmark;
  dialogRef = inject(DialogRef);
  service = inject(DataComponentService);

  title = '';

  closeModal() {
    this.dialogRef.close();
  }

  protected cancel() {
    this.closeModal();
  }
  protected confirmSave() {
    this.closeModal();

  }

  protected confirmDelete() {
    this.service.deleById(this.data.item.id)
    this.closeModal();
  }
}
