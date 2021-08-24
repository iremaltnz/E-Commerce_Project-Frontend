import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User
  password:string;
  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.getUser();
  }
  getUser(){
    this.user=this.localStorageService.getItem('user');
    console.log(this.user.first_name)
    this.password=this.localStorageService.getItem('password');
  }
  
}
