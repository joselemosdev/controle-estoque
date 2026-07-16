import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView {

  constructor(){}

  public loga(){
    console.log(this.items.length)
  }
  option = input<string>();
  items = input<any[]>();
}
