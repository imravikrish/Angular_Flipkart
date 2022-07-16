import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { WhishlistService } from 'src/app/service/whishlist.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public totalWishlistItems : number = 0;

  public totalItems: number = 0;
  constructor(private cartService: CartService, private wishService: WhishlistService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res => {
      this.totalItems = res.length;
    });
    this.wishService.getProduct()
    .subscribe(res => {
      this.totalWishlistItems = res.length;
    })
    console.log("Total Wishlist Count is: "+this.totalWishlistItems);
  }

}
