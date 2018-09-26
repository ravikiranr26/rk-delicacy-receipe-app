import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeDetailsComponent } from './receipe-details.component';

const routes: Routes = [
    { path: '', component: ReceipeDetailsComponent},
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class ReceipeDetailsRoutingModule { }
