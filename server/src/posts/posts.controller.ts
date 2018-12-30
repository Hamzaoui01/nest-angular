import { Controller, Get, Param, HttpException, HttpStatus, Post, Body, Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAll();
  }
  @Get(':postId') //http://localhost:5000/posts/postId
  getOnePost(@Param('postId') postId) {
      const post= this.postsService.getById(postId);
      //si le post est introuvable:
      if(!post){
        throw new HttpException('Not found' , HttpStatus.NOT_FOUND);
      }
      return post;
  }
  @Post()
  createPost(@Body() createPostDto :CreatePostDto ){
    return this.postsService.creatPost(createPostDto);
  }

  @Put('postId')
  update(@Param('postId') postId,@Body() postDto : CreatePostDto){
   return this.postsService.updatePost(postId,postDto);
  }

}
