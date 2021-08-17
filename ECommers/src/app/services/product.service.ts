import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ProductDetail } from '../models/ProductDetail';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44354/api/products/";

  getProducts():Observable<ListResponseModel<ProductDetail>>{

   let newPath=this.apiUrl+"list";
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }

  getProductDetail(productId:number):Observable<SingleResponseModel<ProductDetail>>{
   let newPath=this.apiUrl+"getbydetail?ProductId="+productId;
   return this.httpClient.get<SingleResponseModel<ProductDetail>>(newPath);
  }
  getByColor(colorId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"getbycolor?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  getByCategory(categoryId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
  getByBrand(brandId:number):Observable<ListResponseModel<ProductDetail>>{
    let newPath=this.apiUrl+"getbybrand?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<ProductDetail>>(newPath);
  }
}
