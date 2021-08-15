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

  getProducts():Observable<ListResponseModel<Product>>{

   let newPath=this.apiUrl+"list";
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }

  getProductDetail(productId:number):Observable<SingleResponseModel<ProductDetail>>{
   let newPath=this.apiUrl+"getbydetail?ProductId="+productId;
   return this.httpClient.get<SingleResponseModel<ProductDetail>>(newPath);
  }
}
