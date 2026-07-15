import { HttpClient } from "@angular/common/http";
import { inject, Inject, Injectable } from "@angular/core";
import { firstValueFrom, Observable } from "rxjs";
import { ProdutoTipo } from "./domains/produto";
import { ThisReceiver } from "@angular/compiler";
import { FornecedorTipo } from "./domains/fornecedor";

@Injectable({
  providedIn: 'root',
})

export class Service{

    private http = inject(HttpClient);

    private readonly URL = 'http://localhost:8080/';
    private readonly produtoEndpoint = 'produto';
    private readonly fornecedorEndpoint = 'fornecedor';
    private readonly movimentacaoEstoqueEndpoint = 'movimentacao-estoque';


    getFornecedores(): Observable<FornecedorTipo[]> {

        return this.http.get<FornecedorTipo[]>(this.URL + this.fornecedorEndpoint); 
        
    }
}