import { Component, computed, input } from '@angular/core';


export type CustomFieldType =
  'texto' | 'data' | 'numero' | 'valor' | 'email' | 'telefone';

@Component({
  selector: 'app-custom-field',
  imports: [],
  templateUrl: './custom-field.html',
  styleUrl: './custom-field.css',
  host: {
    '[style.grid-column]': 'gridColumn()'
  }
})
export class CustomField {

  label = input<string>();
  content = input<string>();
  fieldType = input<CustomFieldType>();
  width = input(10);
  gridColumn = computed(() => `span ${this.width()}`);

}
