import { Component } from '@angular/core';
import {Product} from '../../Models/Product';


@Component({
  selector: 'app-product-display',
  standalone: true,
  imports: [
],
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css'
})
export class ProductDisplayComponent {


  public products:Product[] = [];
  
  public addProduct(product : Product){

    this.products.push({...product});
  }

}
