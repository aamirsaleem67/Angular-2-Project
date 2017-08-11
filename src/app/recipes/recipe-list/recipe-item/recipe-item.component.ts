import { Recipe } from './../../recipe.model';
import { Router } from '@angular/router';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  
  @Input() recipe:Recipe;
  @Input() index;
  // @Output() recipeEvent=new EventEmitter();
  constructor(private service: RecipeService,
              private router:Router) { }

  ngOnInit() {
    // console.log(this.index);
  }

  onRecipeClick(){
      //  this.recipeEvent.emit(this.recipe);
      //  console.log("item");
      //  console.log(this.recipe);
      // this.service.recipeSelected.emit(this.recipe);
      // this.router.navigate(['recipes',this.index]);
  }

}
