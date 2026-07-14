import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { ProdutoTipo } from "./produto";

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