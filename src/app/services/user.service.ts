import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/loginModel';
import { RegisterModel } from '../models/registerModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  apiUrl="https://localhost:44354/api/users/";

  login(loginModel:LoginModel){

     let  newPath=this.apiUrl+"login";
     return this.httpClient.post<ResponseModel>(newPath,loginModel);
  }

  register(registerModel:RegisterModel){
    let  newPath=this.apiUrl+"register";
    return this.httpClient.post<ResponseModel>(newPath,registerModel);
  }

  getByMail(email:string):Observable<SingleResponseModel<User> >{

    let  newPath=this.apiUrl+"getbymail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath);
 }
}
