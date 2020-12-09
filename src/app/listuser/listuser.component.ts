import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from '../Classes/user';
import { UserserviceService } from '../Services/userservice.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  usersData:user[];
  temp:string;
  flat:string[]=[];
  address1:string[]=[];
  address2:string[]=[];
  city:string[]=[];
  state:string[]=[];
  pincode:string[]=[];
  i:number;
  constructor(private _userService:UserserviceService,private _router:Router) { }

  ngOnInit(): void {
    this._userService.getAllUser().subscribe(
      (data:any)=>{

        this.usersData = data;
        for(this.i=0;this.i<this.usersData.length;this.i++){
          this.temp=data[this.i].adddress;
          this.flat[this.i] = data[this.i].address.split(";;;")[0];
          this.address1[this.i] = data[this.i].address.split(";;;")[1];
          this.address2[this.i] = data[this.i].address.split(";;;")[2];
          this.city[this.i] = data[this.i].address.split(";;;")[3];
          this.state[this.i] = data[this.i].address.split(";;;")[4];
          this.pincode[this.i] = data[this.i].address.split(";;;")[5];
        }
      }
    );
  }

}
