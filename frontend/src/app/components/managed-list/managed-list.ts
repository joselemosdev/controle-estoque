import { Component, input } from '@angular/core';

@Component({
  selector: 'app-managed-list',
  imports: [],
  templateUrl: './managed-list.html',
  styleUrl: './managed-list.css',
})
export class ManagedList {

  constructor(){

  }

  items = input<any[]>([{}]);
  isReadOnly = input<boolean>(true);
}
