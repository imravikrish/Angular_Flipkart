import { Component, OnInit } from '@angular/core';
import { WhishlistService } from 'src/app/service/whishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public wishItem: any = [];

  constructor(private wishService: WhishlistService) { }

  ngOnInit(): void {
    this.wishService.getProduct()
    .subscribe(res => {
      this.wishItem = res;
    })
  }

}
