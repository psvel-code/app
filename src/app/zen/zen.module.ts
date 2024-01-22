import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtFeatureProductComponent } from './component/art-feature-product/art-feature-product.component';
import { MaterialModule } from '../material/material.module';
import { Image2Component } from './component/image2/image2.component';



@NgModule({
  declarations: [
    ArtFeatureProductComponent,
    Image2Component
  ],
  imports: [
    CommonModule,
    MaterialModule,

  ],
  exports:[
    ArtFeatureProductComponent,
    Image2Component
  ]
})
export class ZenModule { }
