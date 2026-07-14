import { CategoriaTipo } from "./categoria";
import { FornecedorTipo } from "./fornecedor";

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