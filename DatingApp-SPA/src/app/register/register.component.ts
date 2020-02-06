import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { error } from 'util';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private authService:AuthService,private alertify: AlertifyService) { }
  model: any={};

  ngOnInit() { 
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('registration successful');
      // console.log('registration successful');
    }, error =>{
      // console.log(error); 
      this.alertify.error(error);
    })
    debugger;
    

  }


  
  cancle()
  {
    console.log('cancle clicked');
  }

}
