import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { Produtos } from "../components/produtos/produtos";
import { ProdutoTipo } from "./produto";
import { EntityRecord } from "./record";
import { environment } from "../../environment";

export class MovimentacaoEstoqueTipo {

    constructor(
        public id: string, 
        public tipo: string,
        public quantidade: number,
        public data: Date,
        public observacao: string,
        public produto: ProdutoTipo
    ){}
}
export const movimentacaoEstoqueRecord : EntityRecord<MovimentacaoEstoqueTipo> = {

    titleSingular: "Lançamento",
    titlePlural: "Lançamentos",
    endpoint: environment.movimentacaoEstoqueEndpoint,
    columns : [
        {field : 'id', label : "ID"},
        {field : 'tipo', label : "Tipo"},
        {field : 'quantidade', label : "Quantidade"},
        {field: 'data', label: "Data"}
    ],
}