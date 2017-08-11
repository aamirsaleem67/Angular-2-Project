import { Component, OnInit,OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'  
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  private subscription: Subscription;
  ingredients: Ingredient[]=[];
  constructor(private service: ShoppingListService) { }

  ngOnInit() {

    this.ingredients=this.service.getIngredients();
    this.subscription=this.service.ingredientListUpdated.subscribe(
      (ing:Ingredient[])=>{
        this.ingredients=ing;
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  

}
