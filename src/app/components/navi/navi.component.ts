import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  user:User
  constructor(private localStorageService:LocalStorageService,private translate:TranslateService) { }

  ngOnInit(): void {
    this.user=this.localStorageService.getItem('user');
    this.customerCheck();
    this.adminCheck();
    this.userCheck();
    this.translate.addLangs(['tr','en'])
    this.translate.setDefaultLang('tr');
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


useLanguage(language:string){

  this.translate.use(language)
}

  }

