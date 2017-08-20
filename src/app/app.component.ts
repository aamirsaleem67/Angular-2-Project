import { ToogleComponentService } from './toogle-component.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
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

   firebase.initializeApp({
     apiKey: "AIzaSyAIPyXCCnHPHbXXAGstnU8AmMLbGt6iB-o",
     authDomain: "ng-recipe-book-7f515.firebaseapp.com"
   });
  }
  handleHeaderEvent(header:string){
       this.headerValue=header;
  }
}
