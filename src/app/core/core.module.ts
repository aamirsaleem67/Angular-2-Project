import { AuthGuard } from './../auth/auth-guard.service';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { RecipeService } from './../recipes/recipe.service';
import { ToogleComponentService } from './../toogle-component.service';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
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
    providers:[
        ShoppingListService,ToogleComponentService,RecipeService, 
              DataStorageService,AuthService, 
    ],
    exports:[
        HeaderComponent,
        AppRoutingModule
    ]
})
export class CoreModule{
}