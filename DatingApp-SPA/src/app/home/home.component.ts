import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode =false;

  values:any;
  constructor(private http:HttpClient) { }

 
  ngOnInit() {

    this.GetValues();
  }
  GetValues() {
    this.http.get('https://localhost:44328/api/home').subscribe(
      Response => {
        this.values = Response;
      },
      error => {
        console.log(error);
      }
    );
  }
  registerToggle()
  {
    debugger;
 this.registerMode = !this.registerMode;

  }

}
