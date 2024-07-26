import { Component, Inject, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {


  logiObj: any = {
    "username": "",
    "Password": ""
  };

  constructor(private http: HttpClient) { }

  onLogin() {
    debugger;
    this.http.post("https://localhost:8080/api/User/login", this.logiObj).subscribe((res: any) => {
      if (res.result) {
        alert("Login success!")
      } else {
        alert(res.message)

      }
    })
  }
}
