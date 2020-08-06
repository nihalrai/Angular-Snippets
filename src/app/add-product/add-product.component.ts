import { Component, OnInit } from '@angular/core';
import { AddProductService } from '../add-product.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  template: `
    <form (ngSubmit)="add()">
      Enter Product ID: <input type="number" name="t1" [(ngModel)]=product.id /> <br/>
      Enter Product Name: <input type="text" name="t1" [(ngModel)]=product.name /> <br/>
      Enter Product Price: <input type="number" name="t1" [(ngModel)]=product.price /> <br/>  
      <button type="submit">Add</button>
    </form>
  `,
  styles: [
  ]
})
export class AddProductComponent implements OnInit {
  
  product:Product = new Product();
  /*
  constructor() { }
  */
  
  constructor(private http:HttpClient) { }
  
  
  ngOnInit(): void {
  }

  add(){
      //alert(JSON.stringify(this.product));
      const headers = new HttpHeaders();
      headers.set('Content-Type', 'application/json; charset=utf-8');
      headers.set('Accept', 'text/plain');
      headers.set('Access-Control-Allow-Origin', '*');
      let url = "http://localhost:8080/WebApp/api/product/add";
      this.http.post<Product>(url, this.product, {headers:headers}).subscribe(data=>{
        alert(data);

      });
  }

}

export class Product{
  id:number;
  name:string;
  price:number;
}
