import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WhishlistService {

  public wishlistProducts: any =[];
  public wishlistItems = new BehaviorSubject<any>([]);

  constructor() { }

  getProduct(){
    return this.wishlistItems.asObservable();
  }

  addToWishlist(product: any){
    this.wishlistProducts.push(product);
    this.wishlistItems.next(this.wishlistProducts);
  }
}
