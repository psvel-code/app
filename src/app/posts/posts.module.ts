import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { PostCreateComponent } from './component/post-create/post-create.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ToolBarComponent,
    PostCreateComponent,
    PostListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    ToolBarComponent,
    PostCreateComponent,
    PostListComponent
  ]
})
export class PostsModule { }
