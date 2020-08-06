import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
    providedIn: 'root'
  })

export class ProductService{
    
    fetchProduct(): Product[]{
        return [
            new Product("Redmi  8", "Xiaomi Redmi 8", 9999, "https://rukminim1.flixcart.com/image/312/312/k1fbmvk0/mobile/k/b/e/mi-redmi-8-mzb8250in-original-imafhyabpggagngr.jpeg?q=70"),
            new Product("Realme 5i", "Oppo Forest Green", 10999, "https://rukminim1.flixcart.com/image/312/312/k65d18w0pkrrdj/mobile/r/x/z/realme-5i-rmx2030-original-imafnsx5pakdfdpb.jpeg?q=70"),
            new Product("Poco X2", "Atlantis Blue", 17499, "https://rukminim1.flixcart.com/image/312/312/k65d18w0/mobile/4/k/4/poco-x2-mzb9011in-original-imafzz2hbfkvftm5.jpeg?q=70"),
            new Product("Realme C11", "Rich Grey 32 GB", 7499, "https://rukminim1.flixcart.com/image/312/312/kcdp5zk0/mobile/g/t/z/realme-c11-rmx2185-original-imaftjf8nadztg9c.jpeg?q=70"),
        ];
    }
}