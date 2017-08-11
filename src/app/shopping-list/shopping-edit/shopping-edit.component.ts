import { Component, OnInit,Input,ViewChild,ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 
 @ViewChild('ingredientName') ingredientName:ElementRef;
 @ViewChild('ingredientAmount') ingredientAmount:ElementRef;
 ing:Ingredient;
  constructor(private service: ShoppingListService) { }

  ngOnInit() {
    
  }
  
  onRecipeAdd(){
    // this.ingredientsList.push(new Ingredient(this.ingredientName.nativeElement.value ,this.ingredientAmount.nativeElement.value));
    // console.log(name.value, amount.value);
    this.ing= new Ingredient(this.ingredientName.nativeElement.value ,this.ingredientAmount.nativeElement.value);
    this.service.addItems(this.ing);
    console.log(this.service.getIngredients());

  }

}
