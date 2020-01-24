import { AuthService } from './../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { error } from 'util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   @Input() ValuesFromHome:any;
  constructor(private authService:AuthService) { }
  model: any={};

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {

      console.log('registration successful');
    }, error =>{
      console.log(error);
    })
    debugger;
    console.log(this.model);
  }


  
  cancle()
  {
    console.log('cancle clicked');
  }

}
