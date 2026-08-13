import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environment";

@Injectable({
    providedIn: 'root',
})

export class Service {

    private http = inject(HttpClient);

    private readonly URL = environment.apiUrl;


    public doGet(endpoint: string): Observable<any[]> {
        return this.http.get<any[]>(this.URL + endpoint);
    }

    public doSave(endpoint: string, data: any): Observable<any> {
        return this.http.post<any>(this.URL + endpoint, data);
    }

    public doUpdate(endpoint: string, data: any): Observable<any> {
        console.log('put')
        console.log(data)
        return this.http.put<any>(this.URL + endpoint, data);
    };

    public doDelete(endpoint: string, id: string): Observable<any> {
        console.log(`${this.URL + endpoint}/${id}`);
        return this.http.delete<any>(`${this.URL + endpoint}/${id}`)
    }

}