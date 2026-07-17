import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { DataComponentService } from '../dataComponentService';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(
    private dataComponentService : DataComponentService,
    private setState : ChangeDetectorRef
  ){}

   get selectedOption(){
    return this.dataComponentService.selectedOption();
   }
  
   public openFornecedores(){
     this.selectedOption != 'Fornecedores' ? this.dataComponentService.loadFornecedores() : null;
     this.dataComponentService.selectedOption.set('Fornecedores');
     this.setState.detectChanges();

   }
   public openCategorias(){
     this.selectedOption != 'Categorias' ? this.dataComponentService.loadCategorias() : null;
     this.dataComponentService.selectedOption.set('Categorias');
     this.setState.detectChanges();
   }
   public openProdutos(){
     this.selectedOption != 'Produtos' ? this.dataComponentService.loadProdutos() : null;
     this.dataComponentService.selectedOption.set('Produtos');
     this.setState.detectChanges();
   }
   public openMovimentacaoHistorico(){
     this.selectedOption != 'Estoque - Histórico de Movimentações' ?  this.dataComponentService.loadMovimentacaoEstoque() : null;
     this.dataComponentService.selectedOption.set('Estoque - Histórico de Movimentações');
     this.setState.detectChanges();
   }
}
