import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { ProductComponent } from './components/product/product.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
            RouterOutlet,
            CategoryComponent,
            NaviComponent,
            ProductComponent,
            CartSummaryComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Şeymanur";

  


}
