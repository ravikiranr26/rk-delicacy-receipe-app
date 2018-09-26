import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkCustomMaterialModule } from '../modules/material-module';
import { ReceipeDetailsRoutingModule  } from './receipe-details.routing.module';
import { ReceipeDetailsComponent } from './receipe-details.component';

@NgModule({
  imports: [CommonModule, ReceipeDetailsRoutingModule, RkCustomMaterialModule],
  declarations: [ReceipeDetailsComponent]
})
export class ReceipeDetailsModule {}
