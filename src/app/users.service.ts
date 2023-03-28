import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users, User } from './userModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  private url : string = 'https://reqres.in/api/users';


  getAllUsers(){
    return this.http.get<Users>(this.url);

  }


}
