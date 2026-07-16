import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef  } from '@angular/core';
import { Fornecedores } from '../fornecedores/fornecedores';
import { CommonModule } from '@angular/common';
import { ListView } from '../list-view/list-view';
import { Service } from '../../service';
import { ProdutoTipo } from '../../domains/produto';
import { empty, firstValueFrom, Observable } from 'rxjs';
import { FornecedorTipo } from '../../domains/fornecedor';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
import { CategoriaTipo } from '../../domains/categoria';
import { MovimentacaoEstoqueTipo } from '../../domains/movimentacaoEstoque';

@Component({
  selector: 'app-home',
  imports: [ListView],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  // fornecedores :  FornecedorTipo[] = [];
  // categorias : CategoriaTipo[] = [];
  // produtos : ProdutoTipo[] = [];
  // movimentacaoEstoque : MovimentacaoEstoqueTipo[] = [];
  selectedOption : string = '';
  objectsList : any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private service: Service
  ){}

  async ngOnInit() {
  }

  public loadFornecedores(): void{
    this.service.getFornecedores().subscribe({
      next: fornecedores => {
        this.objectsList = [];
        this.objectsList = fornecedores;
        this.selectedOption = 'Fornecedores';

        this.cdr.detectChanges();
      },
      error : erro => {
        console.log(erro);
      }
    });
  }

  public loadCategorias() : void {
    this.service.getCategorias().subscribe({
      next: categorias => {
        this.objectsList = [];
        this.objectsList = categorias;
        this.selectedOption = 'Categorias';
        console.log(`Tema: ${this.selectedOption} items: ${this.objectsList}`)

        this.cdr.detectChanges();
      },
      error : erro => {
        console.log(erro);
      }
    }) 
  }

  public loadProdutos() : void {
    this.service.getProdutos().subscribe({
      next: produtos => {
        this.objectsList = [];
        this.objectsList = produtos;
        this.selectedOption = 'Produtos';

        this.cdr.detectChanges();
      },
      error : erro => {
        console.log(erro);
      }
    }) 
  }

  public loadMovimentacaoEstoque() : void {
    this.service.getMovimentacaoEstoque().subscribe({
      next: movimentacoes => {
        this.objectsList = [];
        this.objectsList = movimentacoes;
        this.selectedOption = 'Estoque - Histórico de Movimentações';
        this.cdr.detectChanges();
      },
      error : erro => {
        console.log(erro);
      }
    }) 
  }

  public openFornecedores() : void {
    this.loadFornecedores();
  }

  public openCategorias() : void{
    this.loadCategorias();
  }

   public openProdutos() : void {
     this.loadProdutos();
  }

   public openMovimentacaoHistorico() : void {
     this.loadMovimentacaoEstoque();
  }

}
