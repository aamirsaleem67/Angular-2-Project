import { EventEmitter } from '@angular/core';
 import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
 
//  ingredientListUpdated = new EventEmitter<Ingredient[]>();
 ingredientListUpdated = new Subject<Ingredient[]>();

 private ingredients: Ingredient[]=[
    new Ingredient("Apples",4),
    new Ingredient("Potato",20)
  ];

  getIngredients(){
      return this.ingredients.slice();
  }
  
  addItems(ing: Ingredient){
      this.ingredients.push(ing);
      this.ingredientListUpdated.next(this.ingredients.slice());
  }
 
  addIngredients(ingredients:Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientListUpdated.next(this.ingredients.slice());
  }

}