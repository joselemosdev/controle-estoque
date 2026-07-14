import { Component, inject, OnInit  } from '@angular/core';
import { Fornecedores } from '../fornecedores/fornecedores';
import { CommonModule } from '@angular/common';
import { ListView } from '../list-view/list-view';
import { Service } from '../../service';
import { ProdutoTipo } from '../../domains/produto';
import { empty, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [ListView],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  public produtos : Observable<ProdutoTipo[]> = new Observable<ProdutoTipo[]>;  

  constructor(
    private service: Service
  ){}

  ngOnInit(): void {
    console.log("On init!")
    this.loadProdutos();
    console.log(this.produtos)
  }

  public loadProdutos(){
    console.log('load')
    this.produtos = this.service.getProdutos();
    this.produtos.forEach((item) => {
      console.log("ois")
      console.log(item.toString());
    })
  }

}
