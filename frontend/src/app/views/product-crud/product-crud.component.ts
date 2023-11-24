import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/products';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css'],
  providers: [ProductService],
})
export class ProductCrudComponent implements OnInit {
  product?: Product;

  public btnText = 'Save';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('ID'));

    // this.productService
    //   .getProduct(id)
    //   .subscribe((item) => (this.product = item));
  }

  public async addNewProduct(product: Product) {
    const formData = new FormData();

    formData.append('ID', product.ID.toLocaleString());
    formData.append('Name', product.Name);
    formData.append('Price', product.Price.toLocaleString());
    formData.append('Type', product.Type);
    formData.append('EntryDate', product.EntryDate);
    formData.append('DepartureDate', product.DepartureDate);
    formData.append('Destination', product.Destination);

    await this.productService.addProduct(formData).subscribe();

    this.router.navigate(['/products-stock']);
  }
}
