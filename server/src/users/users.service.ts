import { Injectable } from '@nestjs/common';
import * as faker from 'faker/locale/fr';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  private readonly users: any[];
  constructor() {
    this.users = new Array(20)
      .fill(1)
      .map((e, i) => {
        return {
          id: i + 1,
          name : faker.name.findName(),
          email : faker.internet.email(),
          img: faker.image.avatar(),
        };
      });
  }
  getAll() {
    return this.users;
  }
  getUserById(userId: number) {
    return this.users.find(e => e.id === Number(userId));
  }
  remove(userId : Number) {
    const userIndex = this.users.find(e => e.id === Number(userId));
    this.users.splice(userIndex, 1);
    return this.getUserById(Number(userId));
  }
  addUser(createUserDto: CreateUserDto) {
    const user = {
      id: this.generateId(),
      name: createUserDto.name,
      email: createUserDto.email,
      img:faker.image.avatar(),
    };
    this.users.push(user);
    console.log(createUserDto) ;
    return user;
  }
  private generateId() {
    return this.users.length > 0 ?
      Math.max(...this.users.map(e => e.id)) + 1 :
      1;
  }
   updateUser(createUserDto: CreateUserDto){
    let user = this.users.find(user => user.id == createUserDto.id);
    user.name = createUserDto.name;
    user.email = createUserDto.email;    
  }
}
