import { Component, inject, OnInit } from '@angular/core';
import { DataComponentService } from '../../shared-components/dataComponentService';
import { ListView } from "../../shared-components/list-view/list-view";

@Component({
  selector: 'app-produtos',
  imports: [ListView],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit {

  private dataService = inject(DataComponentService);

  constructor() { }

  public ngOnInit(): void {
    this.dataService.selectedOption.set("Produtos");
    this.dataService.loadProdutos();
  }
}

