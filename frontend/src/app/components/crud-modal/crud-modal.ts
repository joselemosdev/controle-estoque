import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-crud-modal',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
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
  crudForm = new FormGroup({});

  get formFieldsAndValues(): Map<string, string> {
    return this.itemFields;
  }

  ngOnInit(): void {
    this.defineItemFields();
  }

  private defineItemFields() {
    //insere primeiro o id e depois os demais campos
    this.itemFields.set('ID', this.data.item.id);
    const formControls: Record<string, FormControl> = {};


    Object.entries(this.data.item).forEach(([key, value]) => {

      formControls[key] = new FormControl(value);

      if (key !== 'ID') {
        this.itemFields.set(key.toUpperCase(), String(value));
      }

    });

    this.crudForm = new FormGroup(formControls);

    if (this.data.action == "view" || this.data.action == "delete") {
      this.isReadOnly = true;
    }
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
    if (this.data.action == 'edit') {
      //update
      console.log('values')
      console.log(this.crudForm.value)
      console.log(this.itemFields)
      this.saveEdit(this.itemFields);
      this.closeModal();
      return;
    }
    this.saveNew(this.itemFields);
    this.closeModal();
    return;
  }

  private saveEdit(data: any) {
    this.service.update(data);
  }
  private saveNew(data: any) {
    this.service.saveNew(data);
  }

  protected confirmDelete() {
    this.service.deleById(this.data.item.id)
    this.closeModal();
  }
}
