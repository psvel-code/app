import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtFeatureProductComponent } from './component/art-feature-product/art-feature-product.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ArtFeatureProductComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ArtFeatureProductComponent
  ]
})
export class ZenModule { }
