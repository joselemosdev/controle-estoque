import { environment } from "../../environment";
import { CategoriaTipo } from "./categoria";
import { FornecedorTipo } from "./fornecedor";
import { ListColumnsType } from "./list-columns";
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
        {field : 'id', label : 'ID', type : ListColumnsType.TEXTO},
        {field : 'nome', label : 'Nome', type: ListColumnsType.TEXTO},
        {field : 'valor', label : 'Preço', type: ListColumnsType.REAIS},
        {field : 'quantidadeEstoque', label: 'Em estoque', type: ListColumnsType.NUMERICO}
    ],
}