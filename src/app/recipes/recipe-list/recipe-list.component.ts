import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {

  // @Output() recipeSelected =new EventEmitter();
  recipes:Recipe[]=[];
  recipeSubscription: Subscription;
  constructor(private recpService: RecipeService,
              private router:Router) { }

  ngOnInit() {
    this.recipeSubscription=this.recpService.recipesChanged
                     .subscribe(
                       (recipes: Recipe[])=>{
                         this.recipes=recipes;
                       }
                     );
    this.recipes=this.recpService.getRecipes();
  }
  
  // handleRecipeEvent(recipe){
  //     console.log("recipe list");
  //     console.log(recipe);
  //     this.recipeSelected.emit(recipe);
  // }

  navigateToNewRecipe(){
        this.router.navigate(['recipes','new']);
        
  }
  
  ngOnDestroy(){
    this.recipeSubscription.unsubscribe();
  }

}
