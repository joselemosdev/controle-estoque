import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef  } from '@angular/core';
import { Fornecedores } from '../fornecedores/fornecedores';
import { CommonModule } from '@angular/common';
import { ListView } from '../list-view/list-view';
import { Service } from '../../service';
import { ProdutoTipo } from '../../domains/produto';
import { empty, firstValueFrom, Observable } from 'rxjs';
import { FornecedorTipo } from '../../domains/fornecedor';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {

  fornecedores :  FornecedorTipo[] = [];
  
  constructor(
    private cdr: ChangeDetectorRef,
    private service: Service
  ){}

  async ngOnInit() {
    this.loadFornecedores();
  }

  public loadFornecedores(): void{
    this.service.getFornecedores().subscribe({
      next: fornecedores => {
        this.fornecedores = fornecedores;
        // this.cdr.detectChanges();
      },
      error : erro => {
        console.log(erro);
      }
    });
  }

}
