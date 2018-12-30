import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly BASE_URL = 'http://localhost:5000/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.BASE_URL);
  }
  getUser(id){
    return this.http.get(this.BASE_URL+'/'+id);
  }
  addUser(user){
    return this.http.post(this.BASE_URL, user, {observe:'response'});
  }
  updateUser(user){
    return this.http.put(this.BASE_URL, user, {observe:'response'});
  }
  removeUser(user){
    return this.http.delete(this.BASE_URL+'/'+user, {observe:'response'});
  }

}
