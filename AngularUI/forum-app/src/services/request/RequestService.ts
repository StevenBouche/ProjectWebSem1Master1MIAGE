import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestService{

    constructor(private http: HttpClient) { }

    async executeGet<K>(url:string) : Promise<K> {
        var request = this.http.get<K>(url);
        return await this.executePromise<any>(request);
    }

    async executePost<T,K>(url: string, data: T = undefined) : Promise<K> {
        var request = this.http.post<K>(url, data);
        return await this.executePromise<any>(request);
    }

    async executePut<T,K>(url: string, data: T) : Promise<K> {
        var request = this.http.put<K>(url,data);
        return await this.executePromise<any>(request);
    }

    async executeDelete<K>(url:string) : Promise<K> {
        var request = this.http.delete<K>(url);
        return await this.executePromise<K>(request);
    }

    async getAddressIP() : Promise<string> {
        var request = this.http.get<any>("http://api.ipify.org/?format=json");
        var result = await this.executePromise<any>(request);
        return result.ip;
    }   

    async executePromise<K>(fun: Observable<K>) : Promise<K> {
        return new Promise<K>((resolv,reject) => {
            fun.subscribe((result:K) => {
                resolv(result);
            }, (error: any ) => {
                console.log(error);
                resolv(undefined);
            });
        });
    }

}