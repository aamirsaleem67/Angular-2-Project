import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../routing.module';
import { HomeComponent } from '../core/home/home.component';
import { HeaderComponent } from '../core/header/header.component';
import { NgModule } from '@angular/core';


@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        HeaderComponent,
        AppRoutingModule
    ]
})
export class CoreModule{
}