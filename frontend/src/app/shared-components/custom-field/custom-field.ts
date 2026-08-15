import { Component, computed, input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export type CustomFieldType =
  'texto' | 'data' | 'numero' | 'valor' | 'img' | 'email' | 'telefone' | 'spaco';

@Component({
  selector: 'app-custom-field',
  imports: [FaIconComponent],
  templateUrl: './custom-field.html',
  styleUrl: './custom-field.css',
  host: {
    '[style.grid-column]': 'gridColumn()'
  }
})
export class CustomField {
  faCopy = faCopy;

  label = input<string>();
  content = input<string>();
  fieldType = input<CustomFieldType>();
  imgPath = input<string>();
  width = input();
  gridColumn = computed(() => `span ${this.width()}`);


  public copyId() {

  }
}
