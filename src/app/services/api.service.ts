import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    server_url = "http://localhost:3000"

    constructor(private http: HttpClient) { }
      
    getAllRecipeAPI(){
        
        return this.http.get(`${this.server_url}/recipes`)
    }
// add TextiMony       
    addTextimonyAPI(reqBody:any){
        return this.http.post(`${this.server_url}/add-textimony`, reqBody)
    }
}
