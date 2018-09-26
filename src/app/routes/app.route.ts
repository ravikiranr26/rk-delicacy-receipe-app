import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { ReceipeListComponent } from '../receipe-list/receipe-list.component';

const appRoutes: Routes = [
    { path: 'receipe-details/:id', loadChildren: '../../app/receipe-details/receipe-details.module#ReceipeDetailsModule' },
    { path: 'receipes', component: ReceipeListComponent },
    { path: '', component: ReceipeListComponent, pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {
        onSameUrlNavigation: 'reload'
    })],
    exports: [RouterModule]
})
export class CoreRoutingModule { }

