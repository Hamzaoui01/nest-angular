import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {HomeComponent} from "./home/home.component";
import {UserDetailComponent} from "./user-detail/user-detail.component";
import {PostsComponent} from "./posts/posts.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContactComponent} from "./contact/contact.component";
import { UserFormComponent } from './user-form/user-form.component';
import { PostFormComponent } from './post-form/post-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addUser', component: UserFormComponent},
  {path: 'addPost', component:PostFormComponent },
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/:userId', component: UserDetailComponent},
  {path: 'users/:userId', component: UserDetailComponent},
  {path: 'addUser/:userId', component: UserFormComponent},
  {path: 'addPost/:postId', component:PostFormComponent },
  {path: 'posts', component: PostsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
