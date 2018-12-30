import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from './posts.service';
import { PostsComponent } from './posts.component';
@NgModule({
  declarations: [PostsComponent],
  imports: [
    CommonModule
  ],
  providers:[
    PostsService
  ]
})
export class PostsModule { }
