import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ProductApi } from '../Models/Product-api';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private url = 'https://dummyjson.com/products';
  public products: ProductApi[] = [];

  constructor(private http: HttpClient) {

   }

   public getProducts(): Observable<ProductApi[]>{

    return this.http.get<any>(this.url).pipe(
      map(data => data.products.map((item: any) => this.mapToProduct(item))),
      tap(products => this.products = products) 
    );
    
   }

   public addProduct(product: ProductApi):void {

    this.products.push(product);

   }

   private mapToProduct(item: any): ProductApi{

    return new ProductApi(
      item.id, 
      item.title,
      item.category,
      item.price,
      item.rating
    );
    
   }

   /*public id: string;    
    public title: string;
    public category: string;    
    public price: number;
    public rating: number;*/ 
}
