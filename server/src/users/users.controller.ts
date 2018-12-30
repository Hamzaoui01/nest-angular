import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(): any {
    return this.usersService.getAll();
  }
  @Get(':userId') // http://localhost:4000/users/56
  getUser(@Param('userId') userId): any {
    const user = this.usersService.getUserById(userId);
    if (!user) {
      throw new HttpException('Pas Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {    
    return this.usersService.addUser(createUserDto);
  }
  @Delete(':UserId')
  removeUser(@Param('userId') userId): any {
    return userId;
  }
  @Put()
  updateUser(@Body() createUserDto: CreateUserDto){
    return this.usersService.updateUser(createUserDto);
  }
}
