import { inject, Injectable, signal } from "@angular/core";
import { Service } from "../service";

@Injectable({
  providedIn: 'root',
})

export class DataComponentService{
    
    constructor(){
        this.loadMovimentacaoEstoque();
    }

    public service = inject(Service);

    selectedOption = signal('Lançamentos');
    objectsList = signal<any[]>([]);

    public loadFornecedores(){
        
        this.service.doGet('fornecedor').subscribe({
            next: fornecedores => {
                this.objectsList.set(fornecedores);
            },
            error : erro => {
                console.log(erro);
            }
        })
    };

    public loadCategorias(){
        this.service.doGet('categoria').subscribe({
            next: categorias => {
                this.objectsList.set(categorias);
            },
            error : erro => {
                console.log(erro);
            }
        }) 
    };

    public loadProdutos(){
        this.service.doGet('produto').subscribe({
            next: produtos => {
                this.objectsList.set(produtos);
            },
            error : erro => {
                console.log(erro);
            }
        }) 
    }

    public loadMovimentacaoEstoque(){
        this.service.getMovimentacaoEstoque().subscribe({
            next: movimentacoes => {
                this.objectsList.set(movimentacoes);
            },
        error : erro => {
            console.log(erro);
        }
    }) 
    }

}