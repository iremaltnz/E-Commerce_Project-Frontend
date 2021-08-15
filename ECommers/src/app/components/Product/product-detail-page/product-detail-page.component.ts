import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductDetail } from 'src/app/models/ProductDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {

  
  productDetail:ProductDetail | undefined
  product_id:number | undefined
  constructor( private activatedRoute:ActivatedRoute,private productService:ProductService) { }

  
  ngOnInit(): void {
    
   this.activatedRoute.params.subscribe(params=>{
    if(params["product_id"]){
       this.getProductDetail(params["product_id"])
    }
  })
}
  
  getProductDetail(product_id:number){
return this.productService.getProductDetail(product_id).subscribe(response=>{
  this.productDetail=response.data,console.log(this.productDetail)
});
  }
}
