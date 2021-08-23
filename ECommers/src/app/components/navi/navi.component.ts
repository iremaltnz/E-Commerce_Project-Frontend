import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user:User
  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.user=this.localStorageService.getItem('user');
  }

  userCheck(){
    if(this.localStorageService.getItem('user')){
return true;
    }else{
      return false;
    }
  }
logOut(){
  localStorage.clear();
}
  
customerCheck(){
  if(this.user.authority_id==3){
    return true;
        }else{
          return false;
        }
}

adminCheck(){
  if(this.user.authority_id==1){
    return true;
        }else{
          return false;
        }
}


  }

