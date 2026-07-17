import { Component, Input, input } from '@angular/core';
import { DataComponentService } from '../dataComponentService';

@Component({
  selector: 'app-list-view',
  imports: [],
  templateUrl: './list-view.html',
  styleUrl: './list-view.css',
})
export class ListView {

  constructor(
     protected dataComponentService : DataComponentService,
  ){}

//  get getSelectedOption() {
//    console.log(this.dataComponentService.selectedOption);
//   return this.dataComponentService.selectedOption;
//  } 
//  get getOjbectsList(){
//    console.log(this.dataComponentService.objectsList);

  // return this.dataComponentService.objectsList;
//  }
  
}
