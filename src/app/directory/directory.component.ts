import { Component, OnInit } from '@angular/core';
import { User } from '../userModel';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit{
  list: User[] = [];

  constructor(private users: UsersService){}


  ngOnInit(): void {
    this.users.getAllUsers().subscribe(
      (users) => {
        this.list = users.data;
        console.log(this.list)  
      }
    )
  }




  



}
