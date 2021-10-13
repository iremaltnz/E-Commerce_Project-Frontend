import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ShoppingCart } from 'src/app/models/ShoppingCart';
import { User } from 'src/app/models/user';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup

  user:User=<User>{};
  userId:number
  shoppingCart:ShoppingCart=<ShoppingCart>{};

  array:number[]=<number[]>{}
  
  constructor(private formBuilder:FormBuilder,private userService:UserService,private router:Router,
    private shoppingCartService:ShoppingCartService) { }

  ngOnInit(): void {
    this.createRegisterForm();

    this.array=[]
  }

  
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      first_name: ["",Validators.required],
      last_name: ["",Validators.required],
      email: ["",Validators.required],
      password:["",Validators.required],
      authority_id:[3,Validators.required]
    })
  }

  register(){
    
    console.log(this.registerForm.value)
    if(this.registerForm.valid){
     
      let registerModel=Object.assign({},this.registerForm.value)
      
      
      this.userService.register(registerModel).subscribe(data=>{
      console.log(data.message),

    
  
       console.log(data.message),
      this.router.navigate(["login"])
   
      },dataError=>{
       console.log(dataError.message)
      
      })
    }
  
  }
}

