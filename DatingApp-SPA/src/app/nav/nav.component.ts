import { Routes, Router } from '@angular/router';
import { AlertifyService } from './../_services/alertify.service';

import { AuthService } from './../_services/auth.service';
import { Employee } from "./../Models/test.modal";
import { LoginModel} from './../Models/login.model';

import { Component, OnInit } from "@angular/core";


@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.css"]
})
export class NavComponent implements OnInit {

  abc = new LoginModel();

  constructor(public authservice: AuthService, private alertify: AlertifyService, private router: Router) {}

  ngOnInit() {}

   login(value) {
      this.authservice.login(value).subscribe( next => {
      this.alertify.success('successfully logged In.');
   
      }, error => {
        this.alertify.error('Login failed.');
      },()=>{
        debugger;
        this.router.navigate(['/members']);
      }
      );
   }

loggedIn()
{
  
  return this.authservice.loggedIn();
}

logout(){
  localStorage.removeItem('token');
  this.alertify.warning('Logged Out');
  this.router.navigate(['/home'])
}


}
