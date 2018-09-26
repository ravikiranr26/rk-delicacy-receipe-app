import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatGridListModule, MatTabsModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatGridListModule, MatTabsModule, MatFormFieldModule, MatInputModule],
  exports: [MatButtonModule, MatCardModule, MatGridListModule, MatTabsModule, MatFormFieldModule, MatInputModule],
})
export class RkCustomMaterialModule { }
