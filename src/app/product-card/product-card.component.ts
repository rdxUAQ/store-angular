import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  name: string = 'Product 1';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit';
  price: number= 30.75;

}
