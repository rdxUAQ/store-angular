import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDisplayComponent } from "./product-form/product-display/product-display.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { ProductApiDisplayComponent } from "./components/product-api-display/product-api-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductDisplayComponent, ProductFormComponent, ProductApiDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store-angular';
}
