import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any[];
  private headers=new Headers({'content-type':'application/json'});
  constructor(private postService:PostsService,private route:Router) { }

  ngOnInit() {
    this.getPosts();
  }
  private getPosts() {
    this.postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }
  onSelect(post){
    this.route.navigate(['/posts',post.postId]);
  }
  delete(post){
    if(confirm("Are you sure you want delete :"+post.title+" ?"))
    var index = this.posts.findIndex(e=>e.postId===Number(post.postId));
    this.posts.splice(index,1);

  }
  edit(post){
    this.route.navigate(['/addPost/',post.postId]);
  }
}
