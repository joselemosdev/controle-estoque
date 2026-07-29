import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataComponentService } from '../../components/dataComponentService';
import { Inventory } from '../../components/inventory/inventory';
import { ListView } from '../../components/list-view/list-view';
import { Navbar } from '../../components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [ListView, Navbar, Inventory, RouterOutlet],
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
