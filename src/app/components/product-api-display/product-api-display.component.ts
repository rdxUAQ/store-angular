import { Component, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductApiFormComponent } from "./product-api-form/product-api-form.component";
import { ProductApi } from '../../Models/Product-api';
import { ProductApiService } from '../../services/product-api.service';

@Component({
  selector: 'app-product-api-display',
  standalone: true,
  imports: [ProductApiFormComponent, CommonModule],
  templateUrl: './product-api-display.component.html',
  styleUrl: './product-api-display.component.css'
})
export class ProductApiDisplayComponent {

  @ViewChild(ProductApiFormComponent) formComp!: ProductApiFormComponent;

  public products: ProductApi[] = [];

  constructor(private productService: ProductApiService){}

  ngOnInit(){
    this.productService.getProducts().subscribe( (data) =>{

      this.products = data;

    })
  }

  public getProduct(product : ProductApi){
    console.log('adding prod:', product)
    this.products.push(product);
  }

}
