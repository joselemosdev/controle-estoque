import { inject, Injectable, signal } from "@angular/core";
import { Service } from "../service";
import { environment } from "../../environment";
import { EntityRecord } from "../domains/record";
import { fornecedorRecord } from "../domains/fornecedor";
import { categoriaRecord } from "../domains/categoria";
import { produtoRecord } from "../domains/produto";
import { movimentacaoEstoqueRecord } from "../domains/movimentacaoEstoque";

@Injectable({
  providedIn: 'root',
})

export class DataComponentService{
    
    constructor(){  }

    public isModalVisible = false;
    loading = false;
    
    public changeModalVisibility(){
        this.isModalVisible = !this.isModalVisible;
    }

    public service = inject(Service);

    record? : EntityRecord<any>;

    selectedOption = signal('Lançamentos');
    objectsList = signal<any[]>([]);

    public loadFornecedores(){
        this.service.doGet(environment.fornecedorEndpoint).subscribe({
            next: fornecedores => {
                this.objectsList.set(fornecedores);
                this.record = fornecedorRecord;
                 this.loading = false;
                 console.log(this.record)
            },
            error : erro => {
                console.log(erro);
            }
        })
    };

    public loadCategorias(){
        this.service.doGet(environment.categoriaEndpoint).subscribe({
            next: categorias => {
                this.objectsList.set(categorias);
                this.record = categoriaRecord;
                 this.loading = false;
            },
            error : erro => {
                console.log(erro);
            }
        }) 
    };

    public loadProdutos(){
        this.service.doGet(environment.produtoEndpoint).subscribe({
            next: produtos => {
                this.objectsList.set(produtos);
                this.record = produtoRecord;
                 this.loading = false;
            },
            error : erro => {
                console.log(erro);
            }
        }) 
    }

    public loadMovimentacaoEstoque(){
        this.service.doGet(environment.movimentacaoEstoqueEndpoint).subscribe({
            next: movimentacoes => {
                this.objectsList.set(movimentacoes);
                this.record = movimentacaoEstoqueRecord;
                this.loading = false;
            },
        error : erro => {
            console.log(erro);
        }
    }) 
    }

}