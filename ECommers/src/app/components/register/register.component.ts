import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup

  constructor(private formBuilder:FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.createRegisterForm();
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
      console.log(data.message)
   
      },dataError=>{
       console.log(dataError.message)
      
      })
    }
  }

}

