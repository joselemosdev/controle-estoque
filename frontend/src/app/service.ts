import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { ProdutoTipo } from "./domains/produto";
import { ThisReceiver } from "@angular/compiler";
import { FornecedorTipo } from "./domains/fornecedor";
import { CategoriaTipo } from "./domains/categoria";
import { MovimentacaoEstoqueTipo } from "./domains/movimentacaoEstoque";
import { appConfig } from "./app.config";
import { environment } from "../environment";

@Injectable({
  providedIn: 'root',
})

export class Service{

    private http = inject(HttpClient);

    private readonly URL = environment.apiUrl;
    private readonly produtoEndpoint = 'produto';
    private readonly fornecedorEndpoint = 'fornecedor';
    private readonly categoriaEndpoint = 'categoria';
    private readonly movimentacaoEstoqueEndpoint = 'movimentacao-estoque';


    getFornecedores(): Observable<FornecedorTipo[]> {
        console.log("URL: " + this.URL);
        return this.http.get<FornecedorTipo[]>(this.URL + this.fornecedorEndpoint); 
    }

    getCategorias(): Observable<CategoriaTipo[]> {
        return this.http.get<CategoriaTipo[]>(this.URL + this.categoriaEndpoint);
    }

    getProdutos(): Observable<ProdutoTipo[]> {
        return this.http.get<ProdutoTipo[]>(this.URL + this.produtoEndpoint);
    }

    getMovimentacaoEstoque(): Observable<MovimentacaoEstoqueTipo[]> {
        return this.http.get<MovimentacaoEstoqueTipo[]>(this.URL + this.movimentacaoEstoqueEndpoint);
    }
}