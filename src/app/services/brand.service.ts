import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/Brand';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44354/api/";

  getBrands():Observable<ListResponseModel<Brand>>{

    let newPath=this.apiUrl+"brands/list";
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }
}
