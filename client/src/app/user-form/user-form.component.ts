import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public user;
  public userid;
  public titre="Add User";
  private param=0;
  constructor(private route:ActivatedRoute,private usersService:UsersService) { }

  ngOnInit() {

    let id=parseInt(this.route.snapshot.paramMap.get('userId'));
    if(id){
      this.userid=id;
      this.getUser();
      this.param=1;

      this.titre="Update User";
    }
    else{
      this.user={
        name:"",
        email:""
      };
    }
  }
  private getUser() {
    this.usersService.getUser(this.userid)
      .subscribe(users => this.user = users);
      
  }

  onSubmit(user){
    console.log(user);
    
    if(this.param==0){
    this.usersService.addUser(user)
    .subscribe(
      data=> console.log('Success', data),
      error => console.error('Error',error)
    );}
    else{
      this.user.name=user.name;
      this.user.email=user.email;
      this.usersService.updateUser(this.user)
      .subscribe(
        data=> console.log('Success', data),
        error => console.error('Error',error)
      );
    }
  }
}
