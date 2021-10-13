import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Product } from 'src/app/models/Product';
import { ProductDetail } from 'src/app/models/ProductDetail';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:ProductDetail[]=<ProductDetail[]>{}

  filter:string

  number_of_product:number
  event:KeyboardEvent
  user:User
  shoppingCart:ShoppingCart=<ShoppingCart>{}

  totalLenght:number;
  page:number=1;

  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private router:Router,
    private localStorageService:LocalStorageService,
    private shoppingCartService:ShoppingCartService,
    private translate:TranslateService) { }

  ngOnInit(): void 
  {
    
    this.activatedRoute.params.subscribe(params=>
      {
      if(params["color_id"]){
        
        this.getByColor(params["color_id"],this.filter);
        }
        else if(params["category_id"]){
         
          this.getByCategory(params["category_id"],this.filter)
          }
      else if(params["brand_id"]){
       
        this.getByBrand(params["brand_id"],this.filter)
        }
        else if(params["filter"]){
          this.filter=params["filter"]
        console.log(typeof this.filter)
        this.getProducts()
          }
      
      else{
        this.getProducts()
        }
      })
  }
  getProducts(){
    console.log(this.filter)
    this.productService.getProducts(this.filter).subscribe(response=>{
      this.products=response.data
      ,console.log(this.products),
      this.totalLenght=response.data.length
     
    })
  }
  getByColor(colorId:number,filter:string){
    this.productService.getByColor(colorId,this.filter).subscribe(Response=>{
      this.products=Response.data,
      console.log(this.products),
      this.totalLenght=Response.data.length
    })
  }
  getByCategory(categoryId:number,filter:string){
    this.productService.getByCategory(categoryId,this.filter).subscribe(Response=>{
      this.products=Response.data,
      console.log(this.products),
      this.totalLenght=Response.data.length
    })
  }
  getByBrand(brandId:number,filter:string){
    this.productService.getByBrand(brandId,this.filter).subscribe(Response=>{
      this.products=Response.data,
      console.log(this.products),
      this.totalLenght=Response.data.length
    })
  }


  setNumberOfProduct(event:any){

    this.event=event
  
   this.number_of_product=Number(this.event.key)
      }

      addCart(product_id:number,unit_price:number){

        console.log(product_id)
        this.user=this.localStorageService.getItem('user')
          this.shoppingCart.product_id=product_id
          this.shoppingCart.unit_price=unit_price
          this.shoppingCart.user_id=this.user.user_id
          this.shoppingCart.number_of_product=this.number_of_product
       
          console.log(this.shoppingCart)
           this.shoppingCartService.add(this.shoppingCart).subscribe(response=>{
             this.shoppingCart=response.data,console.log(response.message)
        
        
         
       
        })}

       
}
