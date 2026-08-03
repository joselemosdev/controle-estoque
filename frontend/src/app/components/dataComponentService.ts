import { inject, Injectable, signal } from "@angular/core";
import { environment } from "../../environment";
import { categoriaRecord } from "../domains/categoria";
import { fornecedorRecord } from "../domains/fornecedor";
import { movimentacaoEstoqueRecord } from "../domains/movimentacaoEstoque";
import { produtoRecord } from "../domains/produto";
import { EntityRecord } from "../domains/record";
import { Service } from "../service";

@Injectable({
    providedIn: 'root',
})

export class DataComponentService {

    constructor() { }

    isModalFieldsReadOnly = false;
    loading = false;
    currentObject: any = undefined;


    public service = inject(Service);

    record?: EntityRecord<any>;

    selectedOption = signal('');
    objectsList = signal<any[]>([]);

    public loadFornecedores() {
        this.service.doGet(environment.fornecedorEndpoint).subscribe({
            next: fornecedores => {
                this.objectsList.set(fornecedores);
                this.record = fornecedorRecord;
                this.loading = false;
            },
            error: erro => {
                console.log(erro);
            }
        })
    };

    public loadCategorias() {
        this.service.doGet(environment.categoriaEndpoint).subscribe({
            next: categorias => {
                this.objectsList.set(categorias);
                this.record = categoriaRecord;
                this.loading = false;
            },
            error: erro => {
                console.log(erro);
            }
        })
    };

    public loadProdutos() {
        this.service.doGet(environment.produtoEndpoint).subscribe({
            next: produtos => {
                this.objectsList.set(produtos);
                this.record = produtoRecord;
                this.loading = false;
                console.log(this.record)

            },
            error: erro => {
                console.log(erro);
            }
        })
    }

    public loadMovimentacaoEstoque() {
        this.service.doGet(environment.movimentacaoEstoqueEndpoint).subscribe({
            next: movimentacoes => {
                this.objectsList.set(movimentacoes);
                this.record = movimentacaoEstoqueRecord;
                this.loading = false;
            },
            error: erro => {
                console.log(erro);
            }
        })
    }

    public deleById(id: string) {
        this.service.doDelete(this.record?.endpoint!, id).subscribe({
            next: deletedItem => {
                this.objectsList.update(lista =>
                    lista.filter(item => item.id !== id)
                );
            }
        });
    }

}