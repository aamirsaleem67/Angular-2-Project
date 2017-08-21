import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component,Output,EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    
    constructor(private storeService: DataStorageService, private authService: AuthService){}
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

    onFetchData(){
        this.storeService.fetchRecipes();
    }

    onLogout(){
        this.authService.logout();
    }
}