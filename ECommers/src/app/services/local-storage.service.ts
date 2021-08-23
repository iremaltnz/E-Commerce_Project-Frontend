import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, object: any) {
    localStorage.setItem(key, JSON.stringify(object));
  }


 getItem(key:string){
  return JSON.parse(localStorage.getItem(key)!);
}
 
clearItem(){
  return localStorage.clear();
}
}
