export interface ListColumns {
    field : string,
    label : string,
    type : ListColumnsType,

}

export enum ListColumnsType {
    TEXTO = 'texto',
    NUMERICO = 'numero',
    REAIS = 'reais',
    DATA = 'data',
    DATAHORA = 'datahora',
    BOOLEANO = 'booleano'
}