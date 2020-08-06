import { Product } from './product';
import { ProductService } from './product.services';
import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'product',
    template: `
    <button type=submit (click)=(showProduct())>Show Products</button><br /> <br />
    <div class="row">
        <div *ngFor="let p of products" class="column">
            <div class="card">
                <!-- <img src="{{p.imgUrl}}" alt="Avatar" style="width:50%">  -->
                <img [src]=p.imgUrl alt="Avatar" style="width:50%">
                <div class="container">
                    <h4><b>{{ p.name }}</b></h4>
                    <p>{{ p.description }}</p>
                    <p>{{ p.price | currency:'INR' }}</p>
                </div>
            </div>
        </div>
    </div>
    `,
    styles: [`
        * {
            box-sizing: border-box;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
        }
        .column {
            float: left;
            width: 25%;
            padding: 0 10px;
        }
        .row {margin: 0 -5px;}
        .row:after {
            content: "";
            display: table;
            clear: both;
        }
        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); 
            padding: 16px;
            float: left;
            text-align: center;
            background-color: #f1f1f1;
        }
        .card.img{
            width: auto;
            max-width: 185px;
            height: auto;
        }
        
        @media screen and (max-width: 600px) {
            .column {
                width: 100%;
                display: block;
                margin-bottom: 20px;
            }
        }
    `]
})
export class ProductListingComponent implements OnInit{
    products: Product[];
    toggle:boolean = true;
    
    ps:ProductService = new ProductService();
    
    ngOnInit(){
        
    }

    showProduct(){
        if(this.toggle){
            this.toggle = false;
            this.products= this.ps.fetchProduct();
            
        }
        else{
            this.toggle = true;
            this.products = null;
        }
    }

    

}