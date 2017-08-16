import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
export class ShoppingListService {
 
//  ingredientListUpdated = new EventEmitter<Ingredient[]>();
 ingredientListUpdated = new Subject<Ingredient[]>();
 startedEditing= new Subject<number>();
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

  getIngredient(index:number){
       return this.ingredients[index];
  }

  updateIngredientItem(index:number, newIngredient: Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientListUpdated.next(this.ingredients.slice());
  }
  deleteItem(index:number){
     this.ingredients.splice(index,1);
     this.ingredientListUpdated.next(this.ingredients.slice());  
  }
}