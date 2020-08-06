export class Product { 
    name: string;
    description: string;
    price: number;
    imgUrl: string;

    constructor(name?: string, description?: string, price?: number, imgUrl?: string) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
    }
}