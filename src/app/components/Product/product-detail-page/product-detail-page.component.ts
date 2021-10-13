import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDetail } from 'src/app/models/ProductDetail';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  
  productDetail:ProductDetail | undefined
  product_id:number =<number>{}

  user:User
  number_of_product:number
  event:KeyboardEvent
  number:number=<number>{}
  shoppingCart:ShoppingCart=<ShoppingCart>{}
  shoppingCartAdd:ShoppingCart=<ShoppingCart>{}
  lenght:number=<number>{};

  constructor( private activatedRoute:ActivatedRoute,private productService:ProductService,private localStorageService:LocalStorageService,
    private shoppingCartService:ShoppingCartService) { }

  
  ngOnInit(): void {
    
   this.activatedRoute.params.subscribe(params=>{
    if(params["product_id"]){
      this.product_id=params["product_id"]
       this.getProductDetail(params["product_id"])
    }
  })
}
  
  getProductDetail(product_id:number){
return this.productService.getProductDetail(product_id).subscribe(response=>{
  this.productDetail=response.data,console.log(this.productDetail)
});
  }

  addCart(product_id:number,unit_price:number){

 this.user=this.localStorageService.getItem('user')
   this.shoppingCart.product_id=product_id
   this.shoppingCart.unit_price=unit_price
   this.shoppingCart.user_id=this.user.user_id
   this.shoppingCart.number_of_product=this.number_of_product

   console.log(this.shoppingCart)
    this.shoppingCartService.add(this.shoppingCart).subscribe(response=>{
      this.shoppingCart=response.data,console.log(response.message)
 
 
  

 })
    
 
    }

    setNumberOfProduct(event:any){

  this.event=event

 this.number_of_product=Number(this.event.key)
    }
   
  }

 
