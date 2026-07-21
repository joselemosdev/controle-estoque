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

export class Service {

    private http = inject(HttpClient);

    private readonly URL = environment.apiUrl;


    doGet(endpoint: string): Observable<any[]> {
        return this.http.get<any[]>(this.URL + endpoint);
    }

    doDelete(endpoint: string, id: string): Observable<any> {
        console.log(`${this.URL + endpoint}/${id}`);
        return this.http.delete<any>(`${this.URL + endpoint}/${id}`)
    }

}