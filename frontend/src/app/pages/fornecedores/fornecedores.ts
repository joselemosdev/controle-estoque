import { Component, inject, OnInit } from '@angular/core';
import { DataComponentService } from '../../components/dataComponentService';
import { ListView } from '../../components/list-view/list-view';

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