import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AddProductService {

  constructor(private http:HttpClient) { }

  fetchPnrStatus(pnrNo : number){
    let url = "http://localhost:8080/RESTApp/api/pnr?pnrNo=" + pnrNo;
    return this.http.get(url);
  }
}
