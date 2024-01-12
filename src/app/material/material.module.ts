import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule,MatFormFieldModule,FormsModule,MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule,MatExpansionModule,  FlexLayoutModule,
  ],
  exports:[
    MatInputModule,MatFormFieldModule,FormsModule,MatToolbarModule,MatIconModule,MatButtonModule,MatCardModule,MatExpansionModule,FlexLayoutModule
  ]
})

export class MaterialModule {

 }
