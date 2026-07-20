import { Component, inject } from '@angular/core';
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
  constructor(){
    this.title = this.service.record['titleSingular'];
    console.log(this.title)
  }
  faXmark = faXmark;
  dialogRef = inject(DialogRef);
  service = inject(DataComponentService);
  title = ''; 

  get getModalVisibility(){
    
    return true;
    
    return this.service.isModalVisible;
  }

  closeModal(){
    this.dialogRef.close();
  }

  abirModal(){
    
  }

  protected cancel(){
    this.closeModal();
  }
  protected confirm(){
    this.closeModal();

  }
}
