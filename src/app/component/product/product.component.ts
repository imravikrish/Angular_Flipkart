import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { CartService } from 'src/app/service/cart.service';
import { WhishlistService } from 'src/app/service/whishlist.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productList: any;
  public filterCategory : any;
  searchKey:string ="";

  constructor(private api: ApiServiceService, private cartService: CartService, private wishservice: WhishlistService){ }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;

      this.productList.forEach((a: any) => {
        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }

        Object.assign(a, {quantity: 1, total: a.price});
      });
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }

  addToCart(item: any){
    this.cartService.addToCart(item);
  }

  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }

  addToWishlist(item: any){
    this.wishservice.addToWishlist(item);
    console.log("Added To Wishlist");
  }

}
