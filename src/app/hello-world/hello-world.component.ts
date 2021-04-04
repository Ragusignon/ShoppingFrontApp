import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name: String = 'Ragu';

  userList?: User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser();
    // this.saveUser();
  }

  getAllUser() {
    this.userService.getAllUser().subscribe((data: any) =>{
      console.log("user info :"+ JSON.stringify(data));
      this.userList = data;
      console.log("userList info :"+ JSON.stringify(this.userList));
    })
  }

  saveUser() {
    this.userService.saveUser().subscribe((data: any)=>{
      console.log("save user detaila: "+ JSON.stringify(data));
    })
  }
}
