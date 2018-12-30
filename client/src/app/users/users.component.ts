import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[];
  constructor(private usersService: UsersService,private route:Router) { }

  ngOnInit() {
    this.getUsers();    
  }

  private getUsers() {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }
  onSelect(user){
    this.route.navigate(['/users',user.id]);
  }
  edit(user){
    this.route.navigate(['/addUser/',user.id]);
  }
  delete(user){
      if(confirm("Are you sure you want delete :"+user.name+" ?"))
      var index = this.users.findIndex(e=>e.id===Number(user.id));
      this.users.splice(index,1);
  }
}
