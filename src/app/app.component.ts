import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  public name:string;
  public id: number;
  public arr=[];
 // public info={nam:"",id_num:1};
  submit()
  {
   
    // this.info.nam=this.name;
     //this.info.id_num=this.id;
     let info={Name:this.name, num_id:this.id}
     this.name=" " 
     this.id=null
     this.arr.push(info);
     console.log(this.arr);    
   }
  remove(item)
  {
    this.arr.splice(item,1);
  }
  
  
}
