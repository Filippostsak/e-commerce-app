import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
  handleProductDetails() {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if (productIdParam) {
      const theProductId: number = +productIdParam;
      this.productService.getProduct(theProductId).subscribe(
        (data) => {
          this.product = data;
        },
        (error) => {
          // Handle error here
          console.error('Error fetching product details:', error);
        }
      );
    } else {
      // Handle the case where "id" param is not found
      console.error('Product id not found in route parameters.');
    }
  }
}
