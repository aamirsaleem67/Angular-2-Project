import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { RecipesModule } from './recipes/recipes.module';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './shared/data-storage.service';
import { RecipeService } from './recipes/recipe.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './routing.module';
import { ToogleComponentService } from './toogle-component.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // RecipesModule,
    ShoppingListModule,
    SharedModule,
    AuthModule,
    CoreModule
  ],
  providers: [ShoppingListService,ToogleComponentService,RecipeService, 
              DataStorageService,AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
