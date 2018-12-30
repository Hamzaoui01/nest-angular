import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  public post;
  public postid;
  public titre="Add post";
  private param=0;

  constructor(private route:ActivatedRoute,private postsService:PostsService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('postId'));
    if(id){
      this.postid=id;
      this.getPost();
      this.param=1;

      this.titre="Update post";
    }
    else{
      this.post={
        name:"",
        email:""
      };
    }
  }
  private getPost() {
    this.postsService.getPost(this.postid)
      .subscribe(Posts => this.post = Posts);
      
  }
  onSubmit(post){
    console.log(post);
    
    if(this.param==0){
    this.postsService.addpost(post)
    .subscribe(
      data=> console.log('Success', data),
      error => console.error('Error',error)
    );}
    else{
      this.post.name=post.name;
      this.post.email=post.email;
      this.postsService.updatepost(this.post)
      .subscribe(
        data=> console.log('Success', data),
        error => console.error('Error',error)
      );
    }
  }

}
