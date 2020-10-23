import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {MatDialogModule,MatIconModule} from '@angular/material';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
import * as Material from "@angular/material";



@NgModule({
  imports: [
    CommonModule, 
    Material.MatDialogModule,
    Material.MatIconModule
  ],
  exports:[
    Material.MatDialogModule,
    Material.MatIconModule
  ],
  declarations: [MatConfirmDialogComponent]
})
export class MaterialModule { }
