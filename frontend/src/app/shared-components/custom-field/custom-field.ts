import { Component, computed, input } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faCopy } from '@fortawesome/free-solid-svg-icons';

export type CustomFieldType =
  'texto' | 'data' | 'numero' | 'valor' | 'img' | 'email' | 'telefone' | 'espaco';

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
  readOnly = input<boolean>(false);
  gridColumn = computed(() => `span ${this.width()}`);

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    // faça aqui o que precisa com o valor digitado
    console.log(value);
  }

  public copyId() {

  }
}
