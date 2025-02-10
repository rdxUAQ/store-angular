import { Component, EventEmitter, Output } from '@angular/core';
import { ProductApi } from '../../../Models/Product-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-product-api-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-api-form.component.html',
  styleUrl: './product-api-form.component.css'
})
export class ProductApiFormComponent {

  public product : ProductApi = {id:'', title:'', category:'', price:0, rating:0};

  @Output() setProductApi = new EventEmitter<ProductApi>();

  public sendProduct(){

    if(this.product != null){

    this.setProductApi.emit(this.product);

    }
  }

  public createProduct():void{
    
    if(this.isValid(this.product)){
      //add product
      this.sendProduct();
    }
    else{
      alert("This product is not valid format")
    }

  }

  private isValid(product: ProductApi):boolean{
      return (
        product.id.trim() !== '' &&
        product.title.trim() !== '' &&
        product.category.trim() !== '' &&
        product.price !== null &&
        product.price > 0 &&
        product.rating !== null &&
        product.rating > 0
      );
    }

    

}
