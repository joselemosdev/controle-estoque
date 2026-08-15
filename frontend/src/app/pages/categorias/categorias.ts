import { Component, inject, OnInit } from '@angular/core';
import { DataComponentService } from '../../shared-components/dataComponentService';
import { ListView } from '../../shared-components/list-view/list-view';
@Component({
  selector: 'app-categorias',
  imports: [ListView],
  templateUrl: './categorias.html',
  styleUrl: './categorias.css',
})
export class Categorias implements OnInit {

  private dataService = inject(DataComponentService);

  constructor() { }

  public ngOnInit(): void {
    this.dataService.loadCategorias();
    this.dataService.selectedOption.set("Categorias")

  }
}
