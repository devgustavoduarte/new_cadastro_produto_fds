import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/models/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  // formProduct: FormGroup;

  // constructor(public data: Product) {
  //   this.formProduct = new FormGroup({
  //     id: new FormControl('', Validators.required),
  //     Name: new FormControl('', Validators.required),
  //     Price: new FormControl('', Validators.required),
  //     Type: new FormControl('', Validators.required),
  //     EntryDate: new FormControl('', Validators.required),
  //     DepartureDate: new FormControl('', Validators.required),
  //     Destination: new FormControl('', Validators.required),
  //   });
  //   this.formProduct.setValue(data);
  // }

  ngOnInit(): void {}
}
