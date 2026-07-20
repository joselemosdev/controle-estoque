import { inject, Injectable, signal } from "@angular/core";
import { Service } from "../service";
import { environment } from "../../environment";

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

    selectedOption = signal('Lançamentos');
    objectsList = signal<any[]>([]);

    public loadFornecedores(){
        
        this.service.doGet(environment.fornecedorEndpoint).subscribe({
            next: fornecedores => {
                this.objectsList.set(fornecedores);
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
            },
        error : erro => {
            console.log(erro);
        }
    }) 
    }

}