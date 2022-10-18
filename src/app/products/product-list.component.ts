import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";
import {ProductService} from "../services/product.service";

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  private _listFilter: string = "";
  filteredProduct: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage: String = "";

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log("In OnInit")
    this.productService.getProducts().subscribe({
      next: product => {
        this.products = product;
        this.filteredProduct = this.products;
      },
      error: err => this.errorMessage =  err
    })
  }

  toggleImages(): void {
    this.showImage = !this.showImage;
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    console.log("In setter: ", value)
    this._listFilter = value;
    this.filteredProduct = this.performFilter(value);
  }

  private performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
}
