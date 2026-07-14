import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { Produtos } from "../components/produtos/produtos";
import { ProdutoTipo } from "./produto";

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
