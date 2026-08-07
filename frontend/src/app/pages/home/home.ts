import { Component, OnInit } from '@angular/core';
import { DataComponentService } from '../../components/dataComponentService';
import { Inventory } from '../../components/inventory/inventory';

@Component({
  selector: 'app-home',
  imports: [Inventory],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(
    private dataComponentService: DataComponentService
  ) { }


  ngOnInit(): void {
    this.dataComponentService.selectedOption.set('');
  }


  public selectedOption() {
    return this.dataComponentService.selectedOption();
  }

  public objectsList() {
    return this.dataComponentService.objectsList;
  }
}
