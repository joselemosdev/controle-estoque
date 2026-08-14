import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-exclude-modal',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './exclude-modal.html',
  styleUrl: './exclude-modal.css',
})
export class CrudModal {

  dialogRef = inject(DialogRef);
  service = inject(DataComponentService);

  constructor(
    @Inject(DIALOG_DATA) public data: any,
  ) { }

  protected cancel() {
    this.dialogRef.close();
  }

  protected confirmDelete() {
    this.service.deleById(this.data.item.id)
    this.cancel();
  }
}
