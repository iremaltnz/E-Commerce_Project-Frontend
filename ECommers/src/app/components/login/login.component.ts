import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup 
  user:User
  constructor(private formBuilder:FormBuilder,private userService:UserService,  private localStorageService:LocalStorageService
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){

      let loginModel=Object.assign({},this.loginForm.value)
      
      this.userService.login(loginModel).subscribe(data=>{console.log(data.message),console.log("giriş basarılı"),
     this.getByMail(loginModel.email),
     this.localStorageService.setItem("password",loginModel.password)
   },
      dataError=>{console.log(dataError.message)})

    }
  }

  getByMail(email:string){

    return this.userService.getByMail(email).subscribe(response=>{
      this.user=response.data,
      this.localStorageService.setItem("user",this.user);
    });
  }
}
