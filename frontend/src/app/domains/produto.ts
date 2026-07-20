import { environment } from "../../environment";
import { CategoriaTipo } from "./categoria";
import { FornecedorTipo } from "./fornecedor";
import { EntityRecord } from "./record";

export class ProdutoTipo {
    constructor(
        public id: string,
        public nome: string,
        public descricao: string,
        public valor: number,
        public codigoBarras: string,
        public precoCompra: number,
        public precoVenda: number,
        public quantidadeEstoque: number,
        public estoqueMinimo: number,
        public categoria: CategoriaTipo,
        public fornecedor: FornecedorTipo
    ){}

}
export const produtoRecord : EntityRecord<ProdutoTipo> = {

    titleSingular: "Produto",
    titlePlural: "Produtos",
    endpoint: environment.produtoEndpoint,
    columns : [
        {field : 'id', label : "ID"},
        {field : 'nome', label : "Nome"},
        {field : 'valor', label : "Preço"},
        {field: 'fornecedor', label: "Fornecedor"},
        {field : 'quantidadeEstoque', label: "Em estoque"}
    ],
}