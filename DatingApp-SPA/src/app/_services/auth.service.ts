import { LoginModel } from './../Models/login.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService} from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 baseurl = 'https://localhost:44328/api/auth/';
constructor(private http: HttpClient ) { }

jwtHelper=new JwtHelperService();
decodedToken: any;
 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json', 
  })
};

login(model: any){    
   return this.http.post(this.baseurl + 'login' , model).pipe(
     map((response: any) => {
         const user = response;
         if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken= this.jwtHelper.decodeToken(user.token);
     
         }
        }
   ));

}


register(model: any){    
  return this.http.post(this.baseurl + 'register' , model);
}

loggedIn()
{

  const token=localStorage.getItem('token');
  return !this.jwtHelper.isTokenExpired(token);
}

}
