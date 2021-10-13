import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { ShoppingCart } from '../models/ShoppingCart';
import { SingleResponseModel } from '../models/singleResponseModel';
import { ShoppingCartModel } from 'src/app/models/shoppingCartModel';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44354/api/shoppingcarts/";

  list(user_id:number):Observable<ListResponseModel<ShoppingCartModel>>{

   let newPath=this.apiUrl+"list?user_id="+user_id;
   return  this.httpClient.get<ListResponseModel<ShoppingCartModel>>(newPath);
  }

  add(shoppingCart:ShoppingCart){
    let newPath=this.apiUrl+"add"
    return  this.httpClient.post<SingleResponseModel<ShoppingCart>>(newPath,shoppingCart);
  }

  update(shoppingCart:ShoppingCart){
    let newPath=this.apiUrl+"update"
    return  this.httpClient.post<SingleResponseModel<ShoppingCart>>(newPath,shoppingCart);
  }

  delete(user_id:number){
    let newPath=this.apiUrl+"delete?user_id="+user_id;
    return  this.httpClient.get<SingleResponseModel<ShoppingCart>>(newPath);
  }

  getTotalPrice(user_id:number):Observable<number>{

    let newPath=this.apiUrl+"gettotalprice?user_id="+user_id;
    return  this.httpClient.get<number>(newPath);
   }

}
