import { inject, Injectable, signal } from "@angular/core";
import { Service } from "../service";
import { environment } from "../../environment";
import { fornecedorRecord } from "../domains/fornecedor";
import { categoriaRecord } from "../domains/categoria";
import { produtoRecord } from "../domains/produto";
import { movimentacaoRecord } from "../domains/movimentacaoEstoque";

@Injectable({
  providedIn: 'root',
})

export class DataComponentService{
    
    constructor(){
        this.loadMovimentacaoEstoque();
    }

    public isModalVisible = false;
    
    public changeModalVisibility(){
        this.isModalVisible = !this.isModalVisible;
    }

    public service = inject(Service);
    record : Record<string, string> = {};
    selectedOption = signal('Lançamentos');
    objectsList = signal<any[]>([]);

    public loadFornecedores(){
        
        this.service.doGet(environment.fornecedorEndpoint).subscribe({
            next: fornecedores => {
                this.objectsList.set(fornecedores);
                this.record = fornecedorRecord;
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
                this.record = movimentacaoRecord;
            },
        error : erro => {
            console.log(erro);
        }
    }) 
    }

}