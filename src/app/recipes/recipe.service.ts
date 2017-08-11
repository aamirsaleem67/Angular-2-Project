import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService{
    private recipes:Recipe[]=[

    new Recipe("Chicken karahi","Nice food",
    "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg",
    [
    new Ingredient("Meat",1),
    new Ingredient("Beef",40)
    ]
    ),
    new Recipe("Chinese soup","Nice food",
    "http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-08.jpg",
    [
        new Ingredient("Potatoes",10),
        new Ingredient("Tomatoes",20)
    ]
    )];

  getRecipes(){
      return this.recipes.slice();
  }
  constructor(private shoppingService: ShoppingListService){

  }

  addIngredientsToList(ingredients: Ingredient[]){
        this.shoppingService.addIngredients(ingredients);
  }

  getRecipe(id:number):Recipe{
        return this.recipes[id];
  }

}