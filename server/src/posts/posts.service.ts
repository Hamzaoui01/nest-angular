import { Injectable } from '@nestjs/common';
import * as faker from 'faker/locale/fr';
import { UsersService } from '../users/users.service';
import { getDiffieHellman } from 'crypto';
import { CreatePostDto } from './create-post.dto';

@Injectable()
export class PostsService {
  private readonly posts: any[];
  constructor(private usersService: UsersService) {
    this.posts = new Array(10)
      .fill(1)
      .map(e => {
        return {
          title: faker.lorem.sentence(),
          body: faker.lorem.paragraphs(3),
          postedAt: faker.date.past(),
          userId: this.getUserId(),
        };
      }).sort((e1, e2) => {
        if (e1.postedAt > e2.postedAt) {
          return 1;
        } else if (e1.postedAt === e2.postedAt) {
          return 0;
        } else { return -1}
    }).map((e,i) => {
      e['postId'] = i + 1;
      e['img']= faker.image.food();
      return e;
      });
  }

  getAll() {
    return this.posts;
  }
  private getUserId() {
     const users = this.usersService.getAll();
     const index = Math.floor(Math.random() * users.length);
     return users[index].id;
  }
  getById(postId){
    return this.posts.find(e => e.postId==Number(postId));
  }
  getByUserId(userId){
    return this.posts.find(e => e.userId==Number(userId));
  }
  creatPost(postDto:CreatePostDto){
    const post={
      postId : this.getId(),
      title : postDto.title,
      body : postDto.body,
      postedAt : new Date(),
    };
    this.posts.push(post);
    return post;
  }
  updatePost(id,postDto:CreatePostDto){
    const post=this.posts.find(e=>e.id==Number(id));
    post.title=postDto.title;
    post.body=postDto.body;
    return post;
  }
  remove(id){
    const postIndex=this.posts.findIndex(e=>e.id == Number( id));
    if(postIndex>-1){
      this.posts.splice(postIndex,1);
      return this.posts[postIndex];
    }
    return 'Not Found';
  }
  private getId(){
    return this.posts.length=== 0
     ? 1
     : Math.max(...this.posts.map(e=>e.postId))+1;
  }

}
