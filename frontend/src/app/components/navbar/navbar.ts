import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataComponentService } from '../dataComponentService';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  router = inject(Router);
  constructor(
    private dataComponentService: DataComponentService,

  ) { }

  loadHome() {
    this.router.navigate([""]);
  }

  get selectedOption() {
    return this.dataComponentService.selectedOption();
  }

  public openLancamentos() {
    this.selectedOption != 'Lançamentos' ? this.dataComponentService.loadMovimentacaoEstoque() : null;
    this.dataComponentService.selectedOption.set('Lançamentos');

  }

  public openFornecedores() {
    this.selectedOption != 'Fornecedores' ? this.dataComponentService.loadFornecedores() : null;
    this.dataComponentService.selectedOption.set('Fornecedores');

  }
  public openCategorias() {
    this.selectedOption != 'Categorias' ? this.dataComponentService.loadCategorias() : null;
    this.dataComponentService.selectedOption.set('Categorias');
  }
  public openProdutos() {
    this.selectedOption != 'Produtos' ? this.dataComponentService.loadProdutos() : null;
    this.dataComponentService.selectedOption.set('Produtos');
  }

  openUser() {

  }

}
