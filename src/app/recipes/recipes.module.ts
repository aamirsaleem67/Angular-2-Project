import { RecipesRoutingModule } from './recipes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './../shared/dropdown.directive';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesComponent } from './recipes.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations:[
       RecipesComponent,
       RecipeDetailComponent,
       RecipeListComponent,
       RecipeItemComponent,
       RecipeStartComponent,
       RecipeEditComponent,
       DropdownDirective
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule
    ],
    providers:[],

})

export class RecipesModule{ }