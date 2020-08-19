import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarPart } from './add-carpart/add-carpart.component';

@Injectable({
  providedIn: 'root'
})
export class CarpartsService {

  constructor(private http: HttpClient) { }

  
  fetchCarParts(){
    let url = 'http://localhost:8181/spring-mvc/viewCarParts.api';
    return this.http.get(url);
  }

  addCarPart(carPart) {
    const url = 'http://localhost:8181/spring-mvc/addCarPart.api';
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json'});
    return this.http.post<CarPart>(url, carPart, {headers: headers});
  }
}