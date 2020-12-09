import { Routes,RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { ListuserComponent } from './listuser/listuser.component';

const arr:Routes=[
  {path:'',component:HomepageComponent},
  {path:'registerUser',component:SignupComponent},
  {path:'listUser',component:ListuserComponent}


];

export const routing=RouterModule.forRoot(arr);
