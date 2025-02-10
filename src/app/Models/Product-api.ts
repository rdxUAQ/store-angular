export class ProductApi {

    
    public id: string;    
    public title: string;
    public category: string;    
    public price: number;
    public rating: number;
    

    constructor(id: string, title: string, category: string, price: number, rating: number) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.rating = rating;
    }

    public toString(): string {
        return "Product [ID: " + this.id + ", Title: " + this.title + ", Category: " + this.category + ", Price: $" + this.price + ", Rating: " + this.rating + "]";
    }
}
