import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-value',
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  values: any;
  constructor(private http: HttpClient) {}

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
}
