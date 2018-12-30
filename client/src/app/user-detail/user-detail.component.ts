import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';
import { PostsService } from '../posts/posts.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  public userid;
  public user;
  public posts;
  constructor(private route:ActivatedRoute,private usersService: UsersService,private postsService:PostsService) { }

  ngOnInit() {
    let id=parseInt(this.route.snapshot.paramMap.get('userId'));
        this.userid=id;
        this.getUser();
        this.getPosts(id);
  }
  private getUser() {
    this.usersService.getUser(this.userid)
      .subscribe(users => this.user = users);
  }
  private getPosts(id){
    this.postsService.getPosts().subscribe(posts => this.posts=posts);
    this.posts=this.posts.map(e => e.userId== Number(id));
  }

  
}
