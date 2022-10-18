import { Component, OnInit } from '@angular/core';
import {IProduct} from "./product";

@Component({
  selector: 'pm-products',
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

  products: IProduct[] = [
    {
      "productId": 2,
      "productName": "Garden Cart",
      "productCode": "GND-0023",
      "releaseDate": "March 18, 2021",
      "description": "15 gallon capacity rolling garden cart",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "assets/images/gardenCart2.jpeg"
    },
    {
      "productId": 5,
      "productName": "Hammer",
      "productCode": "TBX-0048",
      "releaseDate": "May 21, 2021",
      "description": "Curved claw steel hammer",
      "price": 8.9,
      "starRating": 4.8,
      "imageUrl": "assets/images/hammer.jpeg"
  },
  {
    "productId": 6,
    "productName": "Brick",
    "productCode": "BBR-0073",
    "releaseDate": "Juny 24, 2022",
    "description": "Wall brick",
    "price": 0.57,
    "starRating": 5.0,
    "imageUrl": "assets/images/brick.jpeg"
  }
  ];
  constructor() { }


  ngOnInit(): void {
    console.log("In OnInit")
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
