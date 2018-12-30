import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from "./users/users.module";
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {UsersService} from "./users/users.service";
import {HttpClientModule} from "@angular/common/http";
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MyPostsComponent } from './my-posts/my-posts.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { PostFormComponent } from './post-form/post-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    PostsComponent,
    NotFoundComponent,
    NavBarComponent,
    ContactComponent,
    MyPostsComponent,
    UserFormComponent,
    PostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
