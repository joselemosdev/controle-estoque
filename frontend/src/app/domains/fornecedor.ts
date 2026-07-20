import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { ProdutoTipo } from "./produto";
import { environment } from "../../environment";
import { EntityRecord } from "./record";

export class FornecedorTipo {

    constructor(
        public id: string, 
        public nome: string,
        public cnpj: string,
        public telefone: string,
        public email: string,
        public produtos: Array<ProdutoTipo>
    ){}
}
export const fornecedorRecord : EntityRecord<FornecedorTipo> = {

    titleSingular: "Fornecedor",
    titlePlural: "Fornecedores",
    endpoint: environment.fornecedorEndpoint,
    columns : [
        {field : 'id', label : "ID"},
        {field : 'nome', label : "Nome"},
        {field: 'cnpj', label : "CNPJ"}
    ],
}