import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductDetail } from 'src/app/models/ProductDetail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:ProductDetail[]=[];

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void 
  {
    this.activatedRoute.params.subscribe(params=>
      {
      if(params["color_id"]){
        this.getByColor(params["color_id"]);
        }
        else if(params["category_id"]){
          this.getByCategory(params["category_id"])
          }
      else if(params["brand_id"]){
        this.getByBrand(params["brand_id"])
        }
      
      else{
        this.getProducts()
        }
      })
  }
  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      ,console.log(this.products)
    })
  }
  getByColor(colorId:number){
    this.productService.getByColor(colorId).subscribe(Response=>{
      this.products=Response.data,
      console.log(this.products)
    })
  }
  getByCategory(categoryId:number){
    this.productService.getByCategory(categoryId).subscribe(Response=>{
      this.products=Response.data,
      console.log(this.products)
    })
  }
  getByBrand(brandId:number){
    this.productService.getByBrand(brandId).subscribe(Response=>{
      this.products=Response.data,
      console.log(this.products)
    })
  }
}
