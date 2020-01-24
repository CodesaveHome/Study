
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

  constructor(private authservice: AuthService) {}

  ngOnInit() {}

   login(value) {
      this.authservice.login(value).subscribe( next => {
        console.log('logedin');
      }, error => {
        console.log('failed to login');
      });
   }
loggedIn()
{
  
  const token = localStorage.getItem('token');
  return !!token;  
}

logout(){
  localStorage.removeItem('token');
  console.log('lggged out');
}


}
