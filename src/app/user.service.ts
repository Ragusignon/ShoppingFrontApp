import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  dummyUser = {
    "user_name": "RR",
    "gender" : "F",
    "phone_number": "123456789",
    "address": "TN",
    "password": "rr",
    "date_of_birth": "1991-04-29",
    "blood_group" : "AB-"
  };

  constructor(private httpClient: HttpClient) { }

  public getAllUser(){
    return this.httpClient.get('http://localhost:3000/user/getAllUser');
  }

  public saveUser(){
    return this.httpClient.post('http://localhost:3000/user/addUser', this.dummyUser);
  }
}
