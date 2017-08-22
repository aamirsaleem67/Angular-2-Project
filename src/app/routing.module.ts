import { RecipesModule } from './recipes/recipes.module';
import { HomeComponent } from './core/home/home.component';

import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes : Routes=[
    // { path: '',redirectTo: 'recipes',pathMatch:'full' },
    { path:'',component:HomeComponent },
    { path: 'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
    { path: 'shopping',component: ShoppingListComponent }
];
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}