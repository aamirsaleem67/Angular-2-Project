import { DataStorageService } from './../shared/data-storage.service';
import { Component,Output,EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    
    constructor(private storeService: DataStorageService){}
    @Output() headerClick=new EventEmitter<string>();
    onClick(header:string){
        this.headerClick.emit(header);
        
    }

    onSave(){
        this.storeService.storeRecipes()
        .subscribe(
            (response: Response)=>{
                console.log(response);
            }
        );
    }
}