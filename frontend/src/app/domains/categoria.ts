import id from "@angular/common/locales/id";
import { provideProtractorTestingSupport } from "@angular/platform-browser";
import { ProdutoTipo } from "./produto";
import { EntityRecord } from "./record";
import { environment } from "../../environment";
import { ListColumns, ListColumnsType } from "./list-columns";

export class CategoriaTipo { 
 


    constructor(
        public id : string,
        public nome: string,
        public descricao: string,
        public produtos: ProdutoTipo[],
    ){}

}

export const categoriaRecord : EntityRecord<CategoriaTipo> = {

    titleSingular: "Categoria",
    titlePlural: "Categorias",
    endpoint: environment.categoriaEndpoint,
    columns : [
        {field : 'id', label : "ID", type: ListColumnsType.TEXTO},
        {field : 'nome', label : "Nome", type: ListColumnsType.TEXTO}
    ],
}