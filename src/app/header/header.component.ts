import { Component,Output,EventEmitter } from '@angular/core';

@Component({

    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent{
    
    @Output() headerClick=new EventEmitter<string>();
    onClick(header:string){
        this.headerClick.emit(header);
        
    }
}