import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeService{

    recipesChanged= new Subject();
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

  addRecipe(recipe:Recipe){
       this.recipes.push(recipe);
       this.recipesChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index:number, newRecipe:Recipe){
      this.recipes[index]=newRecipe;
      this.recipesChanged.next(this.recipes.slice());

  }

  deleteRecipe(index : number){
       this.recipes.splice(index,1);
       console.log("recipes changed");
       this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes:Recipe[]){
    this.recipes=recipes;
    this.recipesChanged.next(this.recipes);
  }
}