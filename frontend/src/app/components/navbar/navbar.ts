import { ChangeDetectorRef, Component, Inject, NgModule } from '@angular/core';
import { DataComponentService } from '../dataComponentService';
import { NgClass } from '@angular/common';
import { MatIcon } from '@angular/material/icon'; // <-- Mude para MatIcon (sem Module)
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgClass, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  faPlusCircle = faPlusCircle;

  constructor(
    private dataComponentService : DataComponentService,
    
  ){}
    
   get selectedOption(){
    return this.dataComponentService.selectedOption();
   }

   public openLancamentos(){
    this.dataComponentService.selectedOption.set('Lançamentos');
    this.selectedOption != 'Lançamentos' ?  this.dataComponentService.loadMovimentacaoEstoque() : null;
    
   }
  
   public openFornecedores(){
     this.selectedOption != 'Fornecedores' ? this.dataComponentService.loadFornecedores() : null;
     this.dataComponentService.selectedOption.set('Fornecedores');

   }
   public openCategorias(){
     this.selectedOption != 'Categorias' ? this.dataComponentService.loadCategorias() : null;
     this.dataComponentService.selectedOption.set('Categorias');
   }
   public openProdutos(){
     this.selectedOption != 'Produtos' ? this.dataComponentService.loadProdutos() : null;
     this.dataComponentService.selectedOption.set('Produtos');
   }
   public openMovimentacaoHistorico(){
     this.selectedOption != 'Estoque - Histórico de Movimentações' ?  this.dataComponentService.loadMovimentacaoEstoque() : null;
     this.dataComponentService.selectedOption.set('Estoque - Histórico de Movimentações');
   }
}
