import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductData } from '../constants/static.product';
import { Product } from '../models/products';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  status;

  public products$: BehaviorSubject<Product[]>;
  public products: Array<Product> = [];

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/products-stock/`;

  constructor(private http: HttpClient) {
    this.products$ = new BehaviorSubject([]);
    this.products = ProductData;
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProduct(ID: Number): Observable<Product> {
    const url = `${this.apiUrl}${ID}`;
    return this.http.get<Product>(url);
  }

  getAll() {
    this.products$.next(this.products);
  }

  addProduct(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeProduct(ID: Number) {
    const url = `${this.apiUrl}${ID}`;
    return this.http
      .delete(url)
      .subscribe(() => console.log('Delete succesful'));
  }

  editProduct(ID: Number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}${ID}`;
    return this.http.put<FormData>(url, formData);
  }
}
