import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { Produtos } from "../components/produtos/produtos";
import { ProdutoTipo } from "./produto";
import { EntityRecord } from "./record";
import { environment } from "../../environment";
import { ListColumnsType } from "./list-columns";

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
        {field : 'id', label : "ID", type: ListColumnsType.TEXTO},
        {field : 'tipo', label : "Tipo", type: ListColumnsType.TEXTO},
        {field : 'quantidade', label : "Quantidade",  type: ListColumnsType.NUMERICO},
        {field: 'data', label: "Data",  type: ListColumnsType.DATA}
    ],
}