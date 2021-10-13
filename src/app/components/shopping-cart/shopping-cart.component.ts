import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/Product';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { OrderService } from 'src/app/services/order.service';
import { SaleService } from 'src/app/services/sale.service';
import { Sale } from 'src/app/models/sale';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingCartArrays:ShoppingCart[]=<ShoppingCart[]>{}
  user:User
  productArrays:Product[]=<Product[]>{}
  lenght:number=<number>{}
  temp:number
 
  shoppingCartModel:ShoppingCartModel=<ShoppingCartModel>{}
  shoppingCartModels:ShoppingCartModel[]=<ShoppingCartModel[]>{}

  product:Product
  total_price:number
  deneme:number

  order:Order
  orderAddForm:FormGroup
  sale:Sale

  constructor(private shoppingCartService:ShoppingCartService,
    private localStorageService:LocalStorageService,
    private productService:ProductService, private formBuilder:FormBuilder,
    private orderService:OrderService,private saleService:SaleService) { }

  ngOnInit(): void {
    
    this.getCart();
    this.getTotalPrice()
   this.createOrderAddForm()
    this.productArrays=[]
    this.shoppingCartModels=[]
  }

  createOrderAddForm(){
    this.orderAddForm = this.formBuilder.group({
      adress: ["",Validators.required],
      receiver: ["",Validators.required],
      date: ["",Validators.required],
      order_status: ["",Validators.required],
      user_id: ["",Validators.required],
      total_price: ["",Validators.required],
      product_id: ["",Validators.required]
   
    })
  }

  getCart(){
    this.user=this.localStorageService.getItem('user');
    this.shoppingCartService.list(this.user.user_id).subscribe(response=>{
      this.shoppingCartModels=response.data,console.log(this.shoppingCartModels)
      
     
    })

  }
    getTotalPrice(){
      console.log(this.user.user_id)
      this.shoppingCartService.getTotalPrice(this.user.user_id).subscribe(response=>{
        
        this.total_price=response,console.log(Number(response))
      })
    }

 delete(cart_id:number){
console.log(cart_id)
this.shoppingCartService.delete(cart_id).subscribe(response=>{
  console.log(response.message)
})
 
 
   
  }

  addOrder(){

    this.orderAddForm.patchValue({
      user_id:this.user.user_id,
      date: Date().toString(),
      order_status:"Teslim edildi"
    

     
     })
    this.shoppingCartModels.forEach(element => {
      this.orderAddForm.patchValue({
        product_id:element.product_id,
        total_price:element.product_price*element.number_of_product
   
       })

       if(this.orderAddForm.valid){

        console.log("çalıştı")
        let orderAddModel=Object.assign({},this.orderAddForm.value)
        console.log(typeof orderAddModel.date)

        this.orderService.add(orderAddModel).subscribe(response=>{
          console.log(response.message),

          this.saleService.getById(element.product_id).subscribe(response=>{
        
            this.sale=response.data,
            this.sale.number_of_sales=Number(this.sale.number_of_sales)+Number(element.number_of_product)
             console.log(this.sale)
        
          
       
            this.saleService.update(this.sale).subscribe(response=>{
              console.log(response.message),

              this.shoppingCartService.delete(this.user.user_id).subscribe(response=>{
                console.log(response.message)
              });
            })
          })
          
        })
        
       }
    });
          
   

     
       
     

          
      }
  }
 


