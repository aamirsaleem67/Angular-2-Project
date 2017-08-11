import { ToogleComponentService } from './toogle-component.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.myColor {color:white}`]
})
export class AppComponent implements OnInit {
  // username:string="";
  // toogle:boolean= true;
  // onClick(){
  //     this.username="";
  // }
  // checkEmpty():boolean{
  //   if(this.username.length <1 ){
  //     return true;
  //   }
  //   else{
  //     return false;
  //   }
  // }

  toogle:boolean=false;
  count:number = 0;
  counter:string[]=[];
  headerValue:string='Recipes';
  // onClick(){
  //   this.toogle=!this.toogle;
  //   this.count++;
  //   this.counter.push("Log # "+this.count);
  // }
  // getColor(index: number){
  //   console.log(index);
  //   if(index===4 || index > 4){
      
  //     return "blue";
  //   }
  // }
  constructor(private toogleServie: ToogleComponentService){

  }
  ngOnInit(){
     this.toogleServie.toogleComponent.subscribe((header:string)=>{
              this.headerValue=header;
     });
  }
  handleHeaderEvent(header:string){
       this.headerValue=header;
  }
}
