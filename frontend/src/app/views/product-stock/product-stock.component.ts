import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subscription, throwError } from 'rxjs';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

import { Product } from '../../core/models/products';
import { ProductService } from '../../core/services/product.service';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-product-stock',
  templateUrl: './product-stock.component.html',
  styleUrls: ['./product-stock.component.css'],
})
export class ProductStockComponent implements OnInit, OnDestroy, AfterViewInit {
  allProducts: Product[] = [];
  products: Product[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource<Product>();
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public displayedColumns: string[] = [
    // 'ID',
    'Name',
    'Type',
    'Price',
    'EntryDate',
    'DepartureDate',
    'Destination',
  ];

  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];

  public columnsFilters = {};

  public dataSource: MatTableDataSource<Product>;
  private serviceSubscribe: Subscription;

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      console.log('response', response);

      response.map((item) => {
        item.EntryDate = new Date(item.EntryDate!).toLocaleDateString('pt-BR');
      });

      this.productService.getAll();
      this.serviceSubscribe = this.productService.products$.subscribe((res) => {
        this.dataSource.data = res;
      });

      this.dataSource.data = response;

      this.allProducts = response;
      this.products = response;
    });
  }

  public async deleteProduct(id: number) {
    this.productService.removeProduct(id);

    this.productService.getProducts().subscribe((response) => {
      console.log('ID', id, response);
    });
  }

  // private filter() {
  //   this.dataSource.filterPredicate = (data: Product, filter: string) => {
  //     let find = true;

  //     for (var columnName in this.columnsFilters) {
  //       let currentData = '' + data[columnName];

  //       if (!this.columnsFilters[columnName]) {
  //         return;
  //       }

  //       let searchValue = this.columnsFilters[columnName]['contains'];

  //       if (!!searchValue && currentData.indexOf('' + searchValue) < 0) {
  //         find = false;
  //         return;
  //       }

  //       searchValue = this.columnsFilters[columnName]['equals'];

  //       if (!!searchValue && currentData != searchValue) {
  //         find = false;
  //         return;
  //       }

  //       searchValue = this.columnsFilters[columnName]['greaterThan'];

  //       if (!!searchValue && currentData <= searchValue) {
  //         find = false;
  //         return;
  //       }

  //       searchValue = this.columnsFilters[columnName]['lessThan'];

  //       if (!!searchValue && currentData >= searchValue) {
  //         find = false;
  //         return;
  //       }

  //       searchValue = this.columnsFilters[columnName]['startWith'];

  //       if (!!searchValue && !currentData.startsWith('' + searchValue)) {
  //         find = false;
  //         return;
  //       }

  //       searchValue = this.columnsFilters[columnName]['endWith'];

  //       if (!!searchValue && !currentData.endsWith('' + searchValue)) {
  //         find = false;
  //         return;
  //       }
  //     }

  //     return find;
  //   };

  //   this.dataSource.filter = null;
  //   this.dataSource.filter = 'activate';

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }

  // applyFilter(columnName: string, operationType: string, searchValue: string) {
  //   this.columnsFilters[columnName] = {};
  //   this.columnsFilters[columnName][operationType] = searchValue;
  //   this.filter();
  // }

  // clearFilter(columnName: string) {
  //   if (this.columnsFilters[columnName]) {
  //     delete this.columnsFilters[columnName];
  //     this.filter();
  //   }
  // }
}
