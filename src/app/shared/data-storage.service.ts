import { Recipe } from './../recipes/recipe.model';
import { RecipesComponent } from './../recipes/recipes.component';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
@Injectable()
export class DataStorageService{
  
  constructor(private http:Http, private recipeService: RecipeService){}
  
  storeRecipes(){
    //   const header = new Headers({'Content-Type':'application/json'});
       return this.http.put('https://ng-recipe-book-7f515.firebaseio.com/recipes.json',this.recipeService.getRecipes());
  }

  fetchRecipes(){
     this.http.get('https://ng-recipe-book-7f515.firebaseio.com/recipes.json')
       .map(
           (response:Response)=>{
                const data= response.json();
                 for(let recipe of data){
                    if(!recipe['ingredients']){
                        console.log('ifffffffffffffffffffffffffffffffffffffffffffff');
                        console.log(recipe);
                        recipe['ingredients']=[];
                    }
                 }
                return data;
           }
       ).
      subscribe(
          (recipes:any[])=>{
              console.log(recipes[0]);
               this.recipeService.setRecipes(recipes);
          }
      );
  }
}