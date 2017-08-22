
import { NgModule } from '@angular/core';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { Routes,RouterModule } from '@angular/router';

const appRoutes : Routes=[
    { path: '',redirectTo: 'recipes',pathMatch:'full' },
    
    { path: 'shopping',component: ShoppingListComponent },
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