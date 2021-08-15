import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/Color';

@Injectable({
    providedIn: 'root'
  })
  export class ColorService {
  
    constructor(private httpClient:HttpClient) { }
  
    apiUrl="https://localhost:44354/api/";
  
    getColors():Observable<ListResponseModel<Color>>{
  
      let newPath=this.apiUrl+"colors/list";
      return this.httpClient.get<ListResponseModel<Color>>(newPath);
    }
  }
  