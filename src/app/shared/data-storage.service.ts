import { Recipe } from './../recipes/recipe.model';
import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataStorageService{
  
  constructor(private http:Http, private recipeService: RecipeService){}
  
  storeRecipes(){
    //   const header = new Headers({'Content-Type':'application/json'});
       return this.http.post('https://ng-recipe-book-7f515.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }

  fetchRecipes(){
     this.http.get('https://ng-recipe-book-7f515.firebaseio.com/recipes.json')
      .subscribe(
          (response:Response)=>{
              const recipes:Recipe[]=  response.json();
              this.recipeService.setRecipes(recipes);
          }
      );
  }
}