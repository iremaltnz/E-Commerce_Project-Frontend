import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { Sale } from '../models/sale';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  constructor(private httpClient:HttpClient) { }

 apiUrl="https://localhost:44354/api/";
  
    
 add(sale:Sale):Observable<ResponseModel>{
  
      let newPath=this.apiUrl+"sales/add";
      return this.httpClient.post<ResponseModel>(newPath,sale);
    }

    update(sale:Sale):Observable<ResponseModel>{
  
      let newPath=this.apiUrl+"sales/update";
      return this.httpClient.post<ResponseModel>(newPath,sale);
    }

    getById(product_id:number):Observable<SingleResponseModel<Sale>>{
      let newPath=this.apiUrl+"sales/getbyid?product_id="+product_id
      return this.httpClient.get<SingleResponseModel<Sale>>(newPath);
    }

}
