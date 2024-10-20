import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';


interface Product {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-products',  
  templateUrl: './products.component.html',  
  styleUrls: ['./products.component.css']  
})

export class ProductsComponent implements AfterViewInit {

  products: Product[] = [
    {
      name: 'Smartphone',
      description: 'High-end smartphone with great camera.',
      price: 699,
      imageUrl: 'https://images.unsplash.com/photo-1600087626120-062700394a01?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Laptop',
      description: 'Powerful laptop for professionals.',
      price: 1200,
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    },
    {
      name: 'Headphones',
      description: 'Wireless noise-cancelling headphones.',
      price: 199,
      imageUrl: 'https://images.unsplash.com/photo-1628202926206-c63a34b1618f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D',
    },
  ];

  selectedProduct: Product | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    const ctx = document.getElementById('productsSalesChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
          label: 'Sales',
          data: [12000, 19000, 3000, 5000, 20000, 30000],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  openProductModal(product: Product) {
    this.selectedProduct = product;
  }

  closeProductModal() {
    this.selectedProduct = null;
  }

  buyProduct(product: Product) {
    alert(`You bought ${product.name} for $${product.price}`);
    this.closeProductModal(); 
  }
}
