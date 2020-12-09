import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {user} from '../Classes/user';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  private url = 'https://unizyrebackend.herokuapp.com/users/';
  constructor(private _http:HttpClient) { }

  getAllUser(){
    return this._http.get(this.url);
  }
  addUser(item:user)
  {
    return this._http.post(this.url,item);
  }
}
