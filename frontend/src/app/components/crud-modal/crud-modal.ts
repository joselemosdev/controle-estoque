import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-crud-modal',
  standalone: true,
  imports: [FontAwesomeModule, MatFormFieldModule, MatInputModule, MatSelectModule],
  templateUrl: './crud-modal.html',
  styleUrl: './crud-modal.css',
})
export class CrudModal implements OnInit {
  constructor(
    @Inject(DIALOG_DATA) public data: any,
  ) {
    this.title = this.service.record!.titlePlural.toString();
  }
  isReadOnly = false;

  ngOnInit(): void {
    this.defineItemFields();
  }

  private defineItemFields() {
    //insere primeiro o id e depois os demais campos
    this.itemFields.set('ID', this.data.item.id);
    Object.entries(this.data.item).forEach(([key, value]) => {
      if (key !== 'ID') {
        this.itemFields.set(key.toUpperCase(), String(value));
      }
    });

    if (this.data.action == "view" || this.data.action == "delete") {
      this.isReadOnly = true;
    }

  }

  private defineIdFirst() {
    const id = this.itemFields.get('id');
    this.itemFields;
  }



  itemFields: Map<string, string> = new Map<string, string>();
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
