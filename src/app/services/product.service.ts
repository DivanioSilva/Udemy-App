import { Injectable } from '@angular/core';
import {IProduct} from "../products/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): IProduct[] {
    return [
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GND-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 3.2,
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
  }
}
