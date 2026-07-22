import { Component, input, OnInit } from '@angular/core';
import { ListColumns } from '../../domains/list-columns';
import { faPlusCircle, faEdit, faTrashCan, faEye, faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EntityRecord } from '../../domains/record';

@Component({
  selector: 'app-card',
  imports: [FontAwesomeModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit{

  constructor(){}


    ngOnInit(): void {
        this.item = this.record();
    }

  record = input<EntityRecord<any>>();
  item? : EntityRecord<any>;

  faTrashCan = faTrashCan; 
  faEdit = faEdit;
  faEye = faEye;
  faCopy = faCopy;


  protected deleteItem(item : any){}
  protected editItem(){}
  protected viewItem(){}
}
