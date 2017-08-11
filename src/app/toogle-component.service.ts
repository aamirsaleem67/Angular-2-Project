import { EventEmitter } from '@angular/core';
export class ToogleComponentService {

    toogleComponent = new EventEmitter();
    
    onToogle(value:string){
       this.toogleComponent.emit(value);
    }
}