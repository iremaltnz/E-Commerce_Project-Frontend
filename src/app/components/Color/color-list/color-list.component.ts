import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/Color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  colors:Color[]=[];

  colorId:number
  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorService.getColors().subscribe(response=>{
      this.colors=response.data
      ,console.log(this.colors)
    
    })
  }

  deneme(colorId:number){
this.colorId=colorId;
console.log(this.colorId),
console.log(colorId)
console.log("calıştı")
  }

}
