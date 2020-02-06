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

  constructor(private authservice: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {}

   login(value) {
      this.authservice.login(value).subscribe( next => {
      this.alertify.success('successfully logged In.');
      }, error => {
        this.alertify.error('Login failed.');
      });
   }
loggedIn()
{
  
  const token = localStorage.getItem('token');
  return !!token;  
}

logout(){
  localStorage.removeItem('token');
  this.alertify.warning('Logged Out');
}


}
