import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44354/api/";

  getCategories():Observable<ListResponseModel<Category>>{

    let newPath=this.apiUrl+"categories/getall";
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }
}
