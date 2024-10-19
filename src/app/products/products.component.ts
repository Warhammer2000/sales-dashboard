import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [
    { name: 'Product 1', price: 119.99 },
    { name: 'Product 2', price: 89.99 },
    { name: 'Product 3', price: 59.99 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
