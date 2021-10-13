import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  productUpdateForm:FormGroup

  product:Product=<Product>{};
  
  constructor(  private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private productService:ProductService) { }

  ngOnInit(): void {
 
 
    this.activatedRoute.params.subscribe(params=>
      {
      if(params["productId"]){
        this.getProduct(params["productId"]);
        }})


        this.createProductUpdateForm()
      
  }
  createProductUpdateForm(){
    this.productUpdateForm = this.formBuilder.group({
      product_id: [this.product.product_id,Validators.required],
      category_id: [this.product.category_id,Validators.required],
      color_id: [this.product.color_id,Validators.required],
      brand_id: [ this.product.brand_id,Validators.required],
      product_name:[this.product.product_name,Validators.required],
      product_price:[this.product.product_price,Validators.required],
      description:[this.product.description,Validators.required],
      stock_quantity:[this.product.stock_quantity,Validators.required]
    })
  }


  getProduct(product_id:number){
     
    this.productService.getById(product_id).subscribe(response=>{
      this.product=response.data,console.log(this.product),this.createProductUpdateForm()

      
    })

  }

  update(){

    if(this.productUpdateForm.valid){
      let updateModel=Object.assign({},this.productUpdateForm.value)
    
      this.productService.update(updateModel).subscribe(response=>{
        console.log(response.message)
      })
    }
   
    }
    
  }

