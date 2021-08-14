import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44354/api/products/list";

  getProducts():Observable<ListResponseModel<Product>>{

   // let newPath=this.apiUrl+"products/list";
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
