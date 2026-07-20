import { ListColumns } from "./list-columns";

export interface EntityRecord<T> {

    titleSingular: string;
    titlePlural: string;

    endpoint: string;
    columns: ListColumns[];

}