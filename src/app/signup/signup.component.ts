import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {user} from '../Classes/user';
import { UserserviceService } from '../Services/userservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user_name:string;
  user_email:string;
  contact:number;
  flat:string;
  address1:string;
  address2:string =" ";
  city:string;
  state:string;
  pincode:number;
  address:string;
  constructor(private _userService:UserserviceService,private _router:Router) { }

  ngOnInit(): void {
  }
  submitForm( ){

    this.address = this.flat+";;;"+this.address1+";;;"+this.address2+";;;"+this.city+";;;"+this.state+";;;"+this.pincode;
    this._userService.addUser(new user(this.user_name,this.user_email,String(this.contact),this.address)).subscribe(
        (data:any)=>{
          alert("Submitted Successfully");

        }
      );
      this._router.navigate(['/']);
  }



}
