import { Component, inject, OnInit } from '@angular/core';
import { DataComponentService } from '../../shared-components/dataComponentService';
import { ListView } from '../../shared-components/list-view/list-view';

@Component({
  selector: 'app-fornecedores',
  imports: [ListView],
  templateUrl: './fornecedores.html',
  styleUrl: './fornecedores.css',
})
export class Fornecedores implements OnInit {
  private dataService = inject(DataComponentService);

  constructor() { }

  public ngOnInit(): void {
    this.dataService.loadFornecedores();
    this.dataService.selectedOption.set("Fornecedores")
  }
}