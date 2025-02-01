import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ProductCardComponent } from "../product-card/product-card.component";

interface Product{
  name:string;
  price: number;
}
@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [
    ProductCardComponent,
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent {

  public products:Product[] = [];
  public newProduct: Product ={name:'', price:0};

  public addProduct(){

    if(this.isValid(this.newProduct)){

      this.products.push({...this.newProduct});
      this.newProduct ={name: "", price: 0}

    }else{
      alert('Invalid product. Please ensure all fields are filled correctly.');
    }
    
    
  }


  private isValid(product: Product):boolean{
    return (
      product.name.trim() !== '' &&
      product.price !== null &&
      product.price > 0
    );
  }
  

}
