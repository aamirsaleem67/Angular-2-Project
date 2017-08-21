import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations:[
      ShoppingListComponent,
      ShoppingEditComponent
  ],
  imports:[
      CommonModule,
      FormsModule
  ]
})
export class ShoppingListModule{

}