import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";


import { Brand } from 'src/app/models/Brand';
import { Category } from 'src/app/models/Category';
import { Color } from 'src/app/models/Color';
import { Product } from 'src/app/models/Product';
import { ProductDetail } from 'src/app/models/ProductDetail';
import { Sale } from 'src/app/models/sale';

import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';
import { ColorService } from 'src/app/services/color.service';
import { ProductService } from 'src/app/services/product.service';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {

  productAddForm:FormGroup
  productUpdateForm:FormGroup

  product:Product
  colors:Color[]
  brands:Brand[]
  categories : Category[]

  colorId:number
  categoryId:number
  brandId:number

  filter:string=<string>{}
  productDetails:ProductDetail[]

  sale:Sale
  totalLenght:number;
  page:number=1;

  constructor(private productService:ProductService,
    private colorService:ColorService,
    private categoryService:CategoryService,
    private brandService:BrandService,
    private formBuilder:FormBuilder,
    private saleService:SaleService) { }

  ngOnInit(): void {
    
    this.getProducts()
    this.getBrands()
    this.getCategories()
    this.getColors()
    this.createProductAddForm()
 
  }

 

  createProductAddForm(){
    this.productAddForm = this.formBuilder.group({
      category_id: ["",Validators.required],
      color_id: ["",Validators.required],
      brand_id: [ "",Validators.required],
      product_name:["",Validators.required],
      product_price:["",Validators.required],
      description:["",Validators.required],
      stock_quantity:["",Validators.required],
      number_of_sale:[0,Validators.required]
    })
  }

  

  getProducts(){
    return this.productService.getProducts("varsayılan").subscribe(response=>{
this.productDetails=response.data,console.log(response.data),
this.totalLenght=response.data.length
    })
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
     
    })
  }
  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
   
    
    })
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.categories=response.data
      
    
    })
  }

  setColorId(colorId:number){
this.colorId=colorId;

  }

  setCategoryId(categoryId:number){
this.categoryId=categoryId;

  }

  setBrandId(brandId:number){
this.brandId=brandId;
  }

  ProductAdd(){
   
  
     this.productAddForm.patchValue({
      color_id:this.colorId,
      brand_id:this.brandId,
      category_id:this.categoryId
     })

     
       
     

     if(this.productAddForm.valid){

      console.log("çalıştı")
      let productAddModel=Object.assign({},this.productAddForm.value)
    
  console.log(productAddModel)

     this.productService.add(productAddModel).subscribe(data=>{
       console.log(data.message)
      
     },dataError=>{
       console.log(dataError.message)
     })
     }
  
}


delete(product_id:number){


this.productService.getById(product_id).subscribe(data=>{
  this.product=data.data,
  this.productService.delete(this.product).subscribe(data=>{
    console.log(data.message)
  })

})


}


}