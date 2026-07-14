import { provideProtractorTestingSupport } from "@angular/platform-browser";

export class CategoriaTipo {

    constructor(
        public id: string, 
        public nome: string,
        public descricao: string,
        public produtos: Array<CategoriaTipo>
    ){}
}
