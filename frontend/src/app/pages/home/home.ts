import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Inventory } from '../../components/inventory/inventory';
import { DataComponentService } from '../../components/dataComponentService';
import { Navbar } from '../../components/navbar/navbar';
import { ListView } from '../../components/list-view/list-view';

@Component({
  selector: 'app-home',
  imports: [ListView, Navbar, Inventory],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  constructor(
    private dataComponentService: DataComponentService
  ) { }

  async ngOnInit() {
    this.dataComponentService.loadMovimentacaoEstoque();
  }

  public selectedOption() {
    return this.dataComponentService.selectedOption();
  }

  public objectsList() {
    return this.dataComponentService.objectsList;
  }
}
