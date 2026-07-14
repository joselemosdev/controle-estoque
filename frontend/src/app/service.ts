import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ProdutoTipo } from "./domains/produto";
import { ThisReceiver } from "@angular/compiler";

@Injectable({
  providedIn: 'root',
})

export class Service{

    private http = inject(HttpClient);

    private readonly URL = 'http://localhost:8080/';
    private readonly produtoEndpoint = 'produto';
    private readonly fornecedorEndpoint = 'fornecedor';
    private readonly movimentacaoEstoqueEndpoint = 'movimentacao-estoque';


    getProdutos(): Observable<ProdutoTipo[]> {
        console.log(`REQUISIÇÃO NA URL: ${this.URL + this.produtoEndpoint}`)
        return this.http.get<ProdutoTipo[]>(this.URL + this.fornecedorEndpoint);
    }
}