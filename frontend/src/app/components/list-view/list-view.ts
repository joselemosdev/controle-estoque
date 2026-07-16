import { Component, Input, input } from '@angular/core';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView {

  constructor(){}
  option = input<string>();
  items = input<any[]>();
}
