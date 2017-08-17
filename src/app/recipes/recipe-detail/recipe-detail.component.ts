import { RecipeService } from './../recipe.service';
import { ToogleComponentService } from './../../toogle-component.service';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

// @Input() recipeEl;
 recipeEl;
  id:number;
  constructor(private toogle: ToogleComponentService,
              private service: RecipeService,
              private route: ActivatedRoute,
              private router:Router) { 
   
  }
 

  ngOnInit() {
        this.route.params
        .subscribe(
          (params: Params)=>{
            this.id=+params['id'];
            this.recipeEl=this.service.getRecipe(this.id);          }
        );
                

       
  }

  
 
 onShoppingListClick(){
   this.service.addIngredientsToList(this.recipeEl.ingredients);
   this.toogle.onToogle("Shopping");
  
 }

 onDelete(){
   this.service.deleteRecipe(this.id);
   this.router.navigate(['/recipes']);
 }
}
