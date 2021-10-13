import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ProductDetail } from '../models/ProductDetail';
import { ResponseModel } from '../models/responseModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44354/api/products/";

  getProducts(filter:string):Observable<ListResponseModel<ProductDetail>>{

   let newPath=this.apiUrl+"list?filter="+filter;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }

  getProductDetail(productId:number):Observable<SingleResponseModel<ProductDetail>>{
   let newPath=this.apiUrl+"getbydetail?ProductId="+productId;
   return this.httpClient.get<SingleResponseModel<ProductDetail>>(newPath);
  }
  getByColor(colorId:number,filter:string):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"getbycolor?colorId="+colorId+"&filter="+filter;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  getByCategory(categoryId:number,filter:string):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"getbycategory?categoryId="+categoryId+"&filter="+filter;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  getByBrand(brandId:number,filter:string):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"getbybrand?brandId="+brandId+"&filter="+filter;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }

  add(product:Product){
    let newPath=this.apiUrl+"add";
    return this.httpClient.post<ResponseModel>(newPath,product);
  }

  delete(product:Product){
    let newPath=this.apiUrl+"delete";
    return this.httpClient.post<ResponseModel>(newPath,product);
  }

  update(product:Product){
    let newPath=this.apiUrl+"update";
    return this.httpClient.post<ResponseModel>(newPath,product);
  }

  getById(productId:number){
    let newPath=this.apiUrl+"getbyid?productId="+productId;
    return this.httpClient.get<SingleResponseModel<Product>>(newPath);
  }
}
