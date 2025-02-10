import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Product } from '../Models/Product';
import { ProductDisplayComponent } from './product-display/product-display.component';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ProductDisplayComponent
],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  @ViewChild(ProductDisplayComponent) prodDispComp! : ProductDisplayComponent;  

  

  
  public newProduct: Product ={name:'', price:0};

  public addProduct(){

    if(this.isValid(this.newProduct)){

      this.prodDispComp.addProduct(this.newProduct);
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
