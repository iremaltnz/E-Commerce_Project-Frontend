import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { OrderDetail } from '../models/orderDetail';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

 apiUrl="https://localhost:44354/api/";
  
    getOrders():Observable<ListResponseModel<OrderDetail>>{
  
      let newPath=this.apiUrl+"orders/list";
      return this.httpClient.get<ListResponseModel<OrderDetail>>(newPath);
    }

 add(order:Order):Observable<ResponseModel>{
  
      let newPath=this.apiUrl+"orders/add";
      return this.httpClient.post<ResponseModel>(newPath,order);
    }

    delete(user_id:number):Observable<ResponseModel>{
  
      let newPath=this.apiUrl+"orders/delete?user_id"+user_id;
      return this.httpClient.get<ResponseModel>(newPath);
    }


}
