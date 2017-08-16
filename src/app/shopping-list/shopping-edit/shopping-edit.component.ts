import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit,Input,
   ViewChild,
  // ElementRef 
    OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 
//  @ViewChild('ingredientName') ingredientName:ElementRef;
//  @ViewChild('ingredientAmount') ingredientAmount:ElementRef;
 
 @ViewChild('f') slForm:NgForm;
 ing:Ingredient;
 subscription: Subscription;
 editMode=false;
 editedItemIndex:number;
 editedItem: Ingredient;
  constructor(private service: ShoppingListService) { }

  ngOnInit() {
     this.subscription=this.service.startedEditing
                       .subscribe(
                         (index :number) =>{
                           this.editedItemIndex=index;
                           this.editMode=true;
                           this.editedItem=this.service.getIngredient(index);
                           this.slForm.setValue({
                             name:this.editedItem.name,
                             amount:this.editedItem.amount
                           });
                         }
                       );
  }
  
  onItemAdd(form: NgForm){
    // this.ingredientsList.push(new Ingredient(this.ingredientName.nativeElement.value ,this.ingredientAmount.nativeElement.value));
    // console.log(name.value, amount.value);
    // this.ing= new Ingredient(this.ingredientName.nativeElement.value ,this.ingredientAmount.nativeElement.value);
    const value= form.value;
    this.ing= new Ingredient(value.name,value.amount);
    if(this.editMode){
      this.service.updateIngredientItem(this.editedItemIndex,this.ing);
    }
    else{
     this.service.addItems(this.ing);
         
    }
    this.editMode=false;
    this.slForm.resetForm();
    console.log(this.service.getIngredients());

  }

  ngOnDestroy(){
             this.subscription.unsubscribe();
  }

  onClear(){
    this.slForm.resetForm();
    this.editMode=false;
  }

  onDelete(){
    this.service.deleteItem(this.editedItemIndex);
    this.onClear();
  }

}
