import { Component, inject, input } from '@angular/core';
import { DataComponentService } from '../dataComponentService';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { DialogRef } from '@angular/cdk/dialog';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crud-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './crud-modal.html',
  styleUrl: './crud-modal.css',
})
export class CrudModal {
  constructor() {
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

  protected confirmeDelete() {
    this.service.deleById
    this.closeModal();
  }
}
