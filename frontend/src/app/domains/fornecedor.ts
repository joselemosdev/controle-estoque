import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { ProdutoTipo } from "./produto";
import { environment } from "../../environment";
import { EntityRecord } from "./record";
import { ListColumnsType } from "./list-columns";

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
        {field : 'id', label : "ID", type: ListColumnsType.TEXTO},
        {field : 'nome', label : "Nome", type: ListColumnsType.TEXTO},
        {field: 'cnpj', label : "CNPJ", type: ListColumnsType.TEXTO}
    ],
}